const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
    name: String,
    img: String,
    url: String,
    address: String,
    phone: String
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;