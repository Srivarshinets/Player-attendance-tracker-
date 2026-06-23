const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  sessionType: {
    type: String,
    enum: ["Morning", "Evening"],
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Session", sessionSchema);
