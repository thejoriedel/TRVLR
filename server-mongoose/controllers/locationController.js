const Location = require('./../models/locationModel');
const locationController = {};

locationController.create = (req, res) => {
  Location.create({"location": "Playa Vista"}, function(err, success) {
    if (err) {
      res.send(err);
    } else if (success) {
      res.send(success);
    }
  })
}

locationController.findMatches = (req, res) => {
  Location.find(req.query, (function(err, found) {
    if (found) {
      res.send(found.map((el => el.location)));
    } else {
      res.send(err);
    }
  }))
};

module.exports = locationController;