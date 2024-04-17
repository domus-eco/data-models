const mongoose = require('mongoose');

const variableSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: String,
    description: String,
    unit: {
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Variable', variableSchema);