console.log("SERVER FILE:", __filename);
const authRoutes = require("./routes/authRoutes");
const playerRoutes = require("./routes/playersRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/attendance", attendanceRoutes);
app.get("/", (req, res) => {
  res.send("Player Attendance API running ");
});
app.get("/test", (req, res) => {
  console.log("TEST ROUTE HIT");

  res.json({
    success: true,
  });
  console.log("TEST ROUTE REGISTERED");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
