const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/smartcrop-ai';
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host} [Database: ${conn.connection.name}]`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.warn('⚠️ Please ensure MongoDB is running locally or set MONGODB_URI to your MongoDB Atlas connection string in backend/.env');
    // We do not exit process so API health check and informational responses can still return helpful diagnostics
    return null;
  }
};

module.exports = connectDB;
