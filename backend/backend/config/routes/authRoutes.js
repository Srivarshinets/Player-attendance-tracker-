const express = require("express");
const jwt = require("jsonwebtoken");

const Coach = require("../models/Coach");

const router = express.Router();

router.post("/login", async (req, res) => {
  console.log("LOGIN ROUTE HIT");
  try {
    const { username, password } = req.body;

    const coach = await Coach.findOne({ username });

    if (!coach) {
      return res.status(404).json({
        message: "Coach not found",
      });
    }

    if (coach.password !== password) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: coach._id,
        ageGroup: coach.ageGroup,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.json({
      token,
      coach: {
        name: coach.name,
        ageGroup: coach.ageGroup,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
