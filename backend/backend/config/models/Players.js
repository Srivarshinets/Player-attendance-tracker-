const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
  bookedSessions: {
    type: Number,
    default: 12,
  },
  usedSessions: {
    type: Number,
    default: 0,
  },
  complimentaryUsed: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Players", playerSchema);
