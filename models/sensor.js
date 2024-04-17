const {mongoose} = require('mongoose');

const sensorSchema = new mongoose.Schema({
    variable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Variable',
        required: true
    },
    //Enum for sensor type [DEVICE, VIRTUAL]]
    type: {
        type: String,
        enum: ['DEVICE', 'VIRTUAL-WEB'],
        default: 'DEVICE'
    },
    //API for virtual sensor
    api: {
        url: String,
        parameter: String,
        values: [String]
    }
}, {timestamps: true})

module.exports = mongoose.model('Sensor', sensorSchema);