const {mongoose} = require('mongoose');

const measurementSchema = new mongoose.Schema({
    variable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Variable',
        required: true
    },
    data: {type: [mongoose.Schema.Types.Mixed]}
}, {timestamps: true})

module.exports = mongoose.model('Measurement', measurementSchema);