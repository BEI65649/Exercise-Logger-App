const mongoose = require("mongoose");
const workoutSchema = new mongoose.Schema({
  workoutType: {
    type: String,
    required: true,
    enum: ["Running", "Weightlifting", "Cycling"],
  },
  workoutDescription: {
    type: String,
    required: true,
  },
  workoutDuration: {
    type: Number,
    required: true,
    min: 5,
    max: 60,
  },
  postingLink: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  workouts: [workoutSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
