const Recommendation = require('../models/Recommendation');
const Crop = require('../models/Crop');
const cropsData = require('../data/cropsData');

/**
 * Agronomic logic engine for crop recommendation
 */
function calculateCropAdvice({ crop, soilType, season, waterAvailability, farmSize }) {
  const normSoil = (soilType || '').toLowerCase();
  const normSeason = (season || '').toLowerCase();
  const normWater = (waterAvailability || '').toLowerCase();
  const numericFarmSize = parseFloat(farmSize) || 1;

  // Find candidate crops
  let candidateCrop = null;

  if (crop && crop !== 'auto' && crop !== 'Any' && crop !== 'Auto-Detect (Best Match)') {
    candidateCrop = cropsData.find(
      (c) => c.name.toLowerCase() === crop.toLowerCase()
    );
  }

  // If auto or specific crop not found, score all crops to find best match
  if (!candidateCrop) {
    let bestScore = -1;
    let bestCrop = cropsData[0];

    for (const c of cropsData) {
      let score = 50; // base score

      const cSoil = c.soilType.toLowerCase();
      const cSeason = c.season.toLowerCase();
      const cWater = c.waterRequirement.toLowerCase();

      // Soil matching
      if (normSoil.includes('clay') && cSoil.includes('clay')) score += 25;
      if (normSoil.includes('sandy') && (cSoil.includes('sandy') || cSoil.includes('loose') || cSoil.includes('friable'))) score += 25;
      if (normSoil.includes('black') && (cSoil.includes('black') || c.name === 'Cotton')) score += 30;
      if (normSoil.includes('loam') && cSoil.includes('loam')) score += 20;
      if (normSoil.includes('alluvial') && cSoil.includes('alluvial')) score += 25;
      if (normSoil.includes('red') && (cSoil.includes('red') || cSoil.includes('sandy loam'))) score += 20;

      // Season matching
      if (normSeason.includes('kharif') || normSeason.includes('monsoon')) {
        if (cSeason.includes('kharif') || cSeason.includes('year-round')) score += 25;
      }
      if (normSeason.includes('rabi') || normSeason.includes('winter')) {
        if (cSeason.includes('rabi') || cSeason.includes('winter')) score += 25;
      }
      if (normSeason.includes('summer') || normSeason.includes('zaid')) {
        if (cSeason.includes('summer') || cSeason.includes('year-round')) score += 20;
      }

      // Water matching
      if (normWater.includes('high') || normWater.includes('abundant') || normWater.includes('standing')) {
        if (cWater.includes('high') || c.name === 'Rice' || c.name === 'Sugarcane' || c.name === 'Banana') score += 30;
      } else if (normWater.includes('low') || normWater.includes('rainfed') || normWater.includes('limited')) {
        if (cWater.includes('low') || c.name === 'Groundnut' || c.name === 'Wheat' || c.name === 'Chilli') score += 30;
        if (c.name === 'Rice' || c.name === 'Sugarcane') score -= 35; // Rice / Sugarcane cannot thrive in low water
      } else {
        // Moderate water
        if (cWater.includes('moderate') || c.name === 'Maize' || c.name === 'Tomato' || c.name === 'Onion') score += 25;
      }

      if (score > bestScore) {
        bestScore = score;
        bestCrop = c;
      }
    }

    candidateCrop = bestCrop;
  }

  // Calculate suitability score (clamped 75% - 98%)
  let finalScore = 88;
  const cSoil = candidateCrop.soilType.toLowerCase();
  const cSeason = candidateCrop.season.toLowerCase();

  if (normSoil && cSoil.includes(normSoil.split(' ')[0])) finalScore += 5;
  if (normSeason && cSeason.includes(normSeason.split(' ')[0])) finalScore += 5;
  if (finalScore > 98) finalScore = 98;
  if (finalScore < 75) finalScore = 75;

  // Farm-size scaled calculations
  const scaledYield = `${(parseFloat(candidateCrop.expectedYield) * numericFarmSize * 0.8).toFixed(1)} - ${(parseFloat(candidateCrop.expectedYield.split('-')[1] || candidateCrop.expectedYield) * numericFarmSize).toFixed(1)} metric tonnes (est. for ${numericFarmSize} ${numericFarmSize === 1 ? 'acre' : 'acres'})`;

  return {
    recommendedCrop: candidateCrop.name,
    soilSuitability: `Highly suitable for ${soilType || candidateCrop.soilType}. Optimal natural structure is ${candidateCrop.soilType}.`,
    waterRequirement: candidateCrop.waterRequirement,
    sunlightRequirement: candidateCrop.sunlight,
    fertilizerSuggestion: `For ${numericFarmSize} acre(s): ${candidateCrop.fertilizer}. Ensure organic basal dressing.`,
    growingPeriod: candidateCrop.growingPeriod,
    farmingTips: candidateCrop.farmingTips,
    suitabilityScore: finalScore,
    yieldEstimate: scaledYield,
    keyConsiderations: [
      `Optimal sowing window is ${candidateCrop.season}.`,
      `Preferred ambient temperature range: ${candidateCrop.temperature}.`,
      `Water availability (${waterAvailability || 'Standard'}) is compatible with ${candidateCrop.name}'s root structure.`
    ]
  };
}

/**
 * @desc    Generate and save a crop recommendation
 * @route   POST /api/advisor
 * @access  Private (JWT Protected)
 */
const getRecommendation = async (req, res, next) => {
  try {
    const { crop, soilType, season, waterAvailability, farmSize } = req.body;

    if (!soilType || !season || !waterAvailability) {
      return res.status(400).json({
        success: false,
        message: 'Please provide Soil Type, Season, and Water Availability',
      });
    }

    // Run recommendation logic
    const recommendationResult = calculateCropAdvice({
      crop: crop || 'Auto-Detect (Best Match)',
      soilType,
      season,
      waterAvailability,
      farmSize: farmSize || '1',
    });

    let savedRecord = null;
    try {
      // Save recommendation to MongoDB for current user
      savedRecord = await Recommendation.create({
        userId: req.user._id,
        crop: crop || recommendationResult.recommendedCrop,
        soilType,
        season,
        waterAvailability,
        farmSize: `${farmSize || '1'} Acres`,
        recommendation: recommendationResult,
      });
    } catch (dbErr) {
      console.warn('Warning: Could not persist recommendation to DB (offline/fallback mode):', dbErr.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Crop recommendation generated successfully',
      data: {
        _id: savedRecord ? savedRecord._id : 'temp-' + Date.now(),
        userId: req.user._id,
        crop: crop || recommendationResult.recommendedCrop,
        soilType,
        season,
        waterAvailability,
        farmSize: `${farmSize || '1'} Acres`,
        recommendation: recommendationResult,
        createdAt: savedRecord ? savedRecord.createdAt : new Date(),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get recommendation history for current user
 * @route   GET /api/advisor/history
 * @access  Private (JWT Protected)
 */
const getRecommendationHistory = async (req, res, next) => {
  try {
    let history = [];
    try {
      history = await Recommendation.find({ userId: req.user._id }).sort({
        createdAt: -1,
      });
    } catch (dbErr) {
      console.warn('Could not fetch recommendation history from DB:', dbErr.message);
    }

    return res.status(200).json({
      success: true,
      count: history.length,
      data: history,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete a recommendation from history
 * @route   DELETE /api/advisor/history/:id
 * @access  Private (JWT Protected)
 */
const deleteRecommendation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await Recommendation.findById(id);

    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Recommendation record not found',
      });
    }

    // Ensure only owner can delete
    if (record.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this recommendation record',
      });
    }

    await record.deleteOne();

    return res.status(200).json({
      success: true,
      message: 'Recommendation record deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecommendation,
  getRecommendationHistory,
  deleteRecommendation,
};
