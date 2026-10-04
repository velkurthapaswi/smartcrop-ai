const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || 'smartcrop_ai_super_secret_jwt_key_2026_production',
    { expiresIn: '30d' }
  );
};

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      if (!token) {
        return res.status(401).json({
          success: false,
          message: 'Not authorized: Access token is missing',
        });
      }

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'smartcrop_ai_super_secret_jwt_key_2026_production'
      );

      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Not authorized: User account does not exist or has been removed',
        });
      }

      next();
    } catch (error) {
      console.error('JWT verification error:', error.message);
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({
          success: false,
          message: 'Session expired. Please log in again to continue.',
        });
      }
      return res.status(401).json({
        success: false,
        message: 'Invalid authorization token. Please log in again.',
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'Not authorized: No bearer token provided in request header',
    });
  }
};

module.exports = {
  protect,
  generateToken,
};
