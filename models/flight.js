var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {type: String, enum: ['AUS', 'DAL', 'LAX', 'SEA']},
    arrival: {type: Date}
  }, {
    timestamps: true
  });

var flightSchema = new Schema({
    airport: {
        type: String, enum: ['AUS', 'DAL', 'LAX', 'SEA'], default: 'SEA'
    },
    destinations: [destinationSchema],
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        require: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let year = new Date().getFullYear();
            parseInt(year + 1);
        },
    },
});

module.exports = mongoose.model('flights', flightSchema);