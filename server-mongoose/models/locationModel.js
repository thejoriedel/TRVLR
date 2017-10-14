const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  location: String,
  cultural: Boolean,
  outdoors: Boolean,
  international: Boolean,
  domestic: Boolean,
  warm: Boolean,
  cold: Boolean,
  wine: Boolean,
  beer: Boolean
});

const Location = mongoose.model('Location', locationSchema, 'Location');

module.exports = Location;