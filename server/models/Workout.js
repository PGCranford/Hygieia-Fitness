const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const workoutSchema = new Schema(
  {
    workoutText: {
      type: String,
      required: "You need to leave a workout!",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Workout = model("Workout", workoutSchema);

module.exports = Workout;
