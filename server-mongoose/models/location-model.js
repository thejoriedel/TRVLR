const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  location: String,
  cultural: "true",
  outdoors: "false",
  "international": "true",
  "domestic": "false",
  "warm": "true",
  "cold": "true",
  "wine": "true",
  "beer": "false"
});


const Location = mongoose.model('Location', locationSchema);

module.exports = Location;