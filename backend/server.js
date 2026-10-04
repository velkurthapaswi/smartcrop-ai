const express = require("express");
const cors = require("cors");

const assistantRoutes = require("./routes/assistantRoutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test backend
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SmartCrop AI backend is running"
  });
});

// AI Assistant API
app.use("/api/assistant", assistantRoutes);

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🌱 SmartCrop AI backend running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});