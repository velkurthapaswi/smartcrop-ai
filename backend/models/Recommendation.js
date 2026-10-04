const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    crop: {
      type: String,
      required: true,
    },
    soilType: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    waterAvailability: {
      type: String,
      required: true,
    },
    farmSize: {
      type: String,
      required: true,
    },
    recommendation: {
      recommendedCrop: {
        type: String,
        required: true,
      },
      soilSuitability: {
        type: String,
        required: true,
      },
      waterRequirement: {
        type: String,
        required: true,
      },
      sunlightRequirement: {
        type: String,
        required: true,
      },
      fertilizerSuggestion: {
        type: String,
        required: true,
      },
      growingPeriod: {
        type: String,
        required: true,
      },
      farmingTips: {
        type: [String],
        default: [],
      },
      suitabilityScore: {
        type: Number,
        default: 95,
      },
      yieldEstimate: {
        type: String,
        default: 'Standard optimal yield',
      },
      keyConsiderations: {
        type: [String],
        default: [],
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;
