const express = require('express');
const router = express.Router();
const {
  getRecommendation,
  getRecommendationHistory,
  deleteRecommendation,
} = require('../controllers/advisorController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, getRecommendation);
router.get('/history', protect, getRecommendationHistory);
router.delete('/history/:id', protect, deleteRecommendation);

module.exports = router;
