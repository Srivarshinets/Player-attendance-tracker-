const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Players",
    required: true,
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session",
    required: true,
  },
  status: {
    type: String,
    enum: ["Regular", "Complimentary", "Absent"],
    default: "Regular",
  },
  image: {
    type: String,
  },
  markedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coach",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
attendanceSchema.index({ playerId: 1, sessionId: 1 }, { unique: true });
module.exports = mongoose.model("Attendance", attendanceSchema);
