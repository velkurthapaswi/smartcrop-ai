const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Crop name is required'],
      unique: true,
      trim: true,
    },
    soilType: {
      type: String,
      required: [true, 'Soil type is required'],
    },
    season: {
      type: String,
      required: [true, 'Season is required'],
    },
    waterRequirement: {
      type: String,
      required: [true, 'Water requirement is required'],
    },
    temperature: {
      type: String,
      required: [true, 'Temperature range is required'],
    },
    growingPeriod: {
      type: String,
      required: [true, 'Growing period is required'],
    },
    fertilizer: {
      type: String,
      required: [true, 'Fertilizer recommendation is required'],
    },
    sunlight: {
      type: String,
      required: [true, 'Sunlight requirement is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    farmingTips: {
      type: [String],
      required: [true, 'At least one farming tip is required'],
    },
    category: {
      type: String,
      default: 'Grain',
    },
    icon: {
      type: String,
      default: '🌱',
    },
    expectedYield: {
      type: String,
      default: 'Moderate to High',
    }
  },
  {
    timestamps: true,
  }
);

// Add text index for fast searching on name, soilType, season, and description
cropSchema.index({ name: 'text', soilType: 'text', season: 'text', description: 'text' });

const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
