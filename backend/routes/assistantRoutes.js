const express = require("express");

const router = express.Router();

const {
  assistant
} = require("../controllers/assistantController");

// POST /api/assistant
router.post("/", assistant);

module.exports = router;