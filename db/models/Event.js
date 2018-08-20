const mongoose = require("../connection");
const Schema = mongoose.Schema;
const Venue = require("./Venue");

const Event = new mongoose.Schema({
  name: String,
  venue: String,
  description: String,
  food: String,
  cost: Number
});

module.exports = mongoose.model("Event", Event);

// mongoose.model('Event', Event)

// module.exports = mongoose
