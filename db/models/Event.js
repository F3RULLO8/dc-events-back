const mongoose = require("../connection");
const Schema = mongoose.Schema;
const Venue = require("./Venue");

const Event = new mongoose.Schema(
  {
    name: String,
    img: String,
    description: String,
    food: String,
    date: String,
    cost: Number,
    venue: String
  },
  { collection: "event" }
);

module.exports = mongoose.model("Event", Event);

// mongoose.model('Event', Event)

// module.exports = mongoose
