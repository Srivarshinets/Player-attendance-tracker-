const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Coach", coachSchema);
