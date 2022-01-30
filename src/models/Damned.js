const mongoose = require('mongoose');

const damnedSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    lies: [{ type: mongoose.Types.ObjectId, ref:'Lie' }]
});

const Damned = mongoose.model('Damned', damnedSchema);

exports.Damned = Damned;

