const Crop = require('../models/Crop');
const cropsData = require('../data/cropsData');

/**
 * @desc    Get all crops with optional search and filter
 * @route   GET /api/crops
 * @access  Public
 */
const getCrops = async (req, res, next) => {
  try {
    const { search, season, soilType } = req.query;

    let query = {};

    if (search) {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: searchRegex },
        { soilType: searchRegex },
        { season: searchRegex },
        { description: searchRegex },
        { category: searchRegex },
      ];
    }

    if (season && season !== 'all') {
      query.season = new RegExp(season, 'i');
    }

    if (soilType && soilType !== 'all') {
      query.soilType = new RegExp(soilType, 'i');
    }

    let crops = [];
    try {
      crops = await Crop.find(query).sort({ name: 1 });
    } catch (dbErr) {
      console.warn('DB query failed, falling back to static dataset:', dbErr.message);
    }

    // Fallback to static memory dataset if DB is empty or disconnected
    if (!crops || crops.length === 0) {
      let filtered = [...cropsData];
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          (c) =>
            c.name.toLowerCase().includes(s) ||
            c.soilType.toLowerCase().includes(s) ||
            c.season.toLowerCase().includes(s) ||
            c.description.toLowerCase().includes(s)
        );
      }
      if (season && season !== 'all') {
        const seas = season.toLowerCase();
        filtered = filtered.filter((c) => c.season.toLowerCase().includes(seas));
      }
      if (soilType && soilType !== 'all') {
        const st = soilType.toLowerCase();
        filtered = filtered.filter((c) => c.soilType.toLowerCase().includes(st));
      }
      crops = filtered;
    }

    return res.status(200).json({
      success: true,
      count: crops.length,
      data: crops,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single crop by ID or name
 * @route   GET /api/crops/:id
 * @access  Public
 */
const getCropById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let crop = null;

    // Check if ID is valid Mongo ObjectId
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      try {
        crop = await Crop.findById(id);
      } catch (e) {
        // Continue to name search
      }
    }

    // Try finding by name (case-insensitive)
    if (!crop) {
      try {
        crop = await Crop.findOne({ name: new RegExp(`^${id}$`, 'i') });
      } catch (e) {
        // Continue
      }
    }

    // Fallback to static dataset
    if (!crop) {
      crop = cropsData.find(
        (c) =>
          c.name.toLowerCase() === id.toLowerCase() ||
          c._id?.toString() === id
      );
    }

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: `Crop with identifier '${id}' was not found in the crop guide`,
      });
    }

    return res.status(200).json({
      success: true,
      data: crop,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCrops,
  getCropById,
};
