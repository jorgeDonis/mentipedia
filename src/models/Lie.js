const mongoose = require('mongoose');

const lieSchema = new mongoose.Schema({
    text: String
});

const Lie = mongoose.model('Lie', lieSchema);

exports.Lie = Lie;

