const {mongoose} = require('mongoose');

const predictionSchema = new mongoose.Schema({
    variable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Variable',
        required: true
    },
    values: [[Date, Number]],
});

module.exports = mongoose.model('Prediction', predictionSchema);