console.log("ATTENDANCE ROUTES LOADED");
const express = require("express");

const Attendance = require("../models/Attendance");
const Player = require("../models/Players");
const router = express.Router();

router.post("/mark", async (req, res) => {
  try {
    const { playerId, sessionId, status } = req.body;
    const existingAttendance = await Attendance.findOne({
      playerId,
      sessionId,
    });
    if (existingAttendance) {
      return res.status(400).json({
        message: "Attendance already marked for this player and session",
      });
    }
    const attendance = await Attendance.create({
      playerId,
      sessionId,
      status,
      markedBy: req.body.markedBy,
    });
    const player = await Player.findById(playerId);
    if (player) {
      if (status === "Regular") {
        player.usedSessions += 1;
      }
      if (status === "Complimentary") {
        player.complimentarySessionsUsed += 1;
      }
      await player.save();
    }
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const Attendance = require("../models/Attendance");

    const attendance = await Attendance.find()
      .populate("playerId")
      .populate("sessionId")
      .populate("markedBy");

    res.json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
