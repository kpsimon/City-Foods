const mongoose = require("mongoose");
const Schema = { mongoose };

// # Log Entry
// * Title - Text
// * Description - Text
// * Comments - Text
// * Rating - scale 1 - 5
// * Image - Text - URL
// * Latitude - Number
// * Longitude - Number
// * Address? - Text
// * Created At - DateTime
// * Updated At - DateTime

const requiredNumber = {
  type: Number,
  required: true,
};

const LogEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: String,
    comments: String,
    image: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    latitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
    visitDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const LogEntry = mongoose.model("LogEntry", LogEntrySchema);

module.exports = LogEntry;
