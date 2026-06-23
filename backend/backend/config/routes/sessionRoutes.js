console.log("SESSION ROUTES LOADED");
const express = require("express");

const Session = require("../models/Session");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { date, sessionType, ageGroup } = req.body;

    const session = await Session.create({
      date,
      sessionType,
      ageGroup,
    });

    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const sessions = await Session.find();

    res.json(sessions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
