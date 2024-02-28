const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({   
    title: { type: String, required: true },
    color: { type: String, required: true }
});

module.exports = mongoose.model('Group', groupSchema);
