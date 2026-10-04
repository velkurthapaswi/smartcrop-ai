const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Crop = require('../models/Crop');
const cropsData = require('./cropsData');
const connectDB = require('../config/db');

dotenv.config();

const seedCrops = async (auto = false) => {
  try {
    if (!auto) {
      await connectDB();
    }

    const count = await Crop.countDocuments();
    if (count === 0 || !auto) {
      console.log(`🌱 Seeding ${cropsData.length} predefined crops into database...`);
      if (!auto) {
        await Crop.deleteMany({});
      }
      await Crop.insertMany(cropsData);
      console.log(`✅ Successfully seeded ${cropsData.length} crops!`);
    } else {
      console.log(`ℹ️ Crop database already populated with ${count} crops.`);
    }

    if (!auto) {
      process.exit(0);
    }
  } catch (error) {
    console.error(`❌ Error seeding crop data: ${error.message}`);
    if (!auto) {
      process.exit(1);
    }
  }
};

if (require.main === module) {
  seedCrops(false);
}

module.exports = seedCrops;
