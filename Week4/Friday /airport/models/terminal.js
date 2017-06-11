import mongoose from 'mongoose';
import Flight from './flights';
var flightsSchema = require('mongoose').model('Flights').schema;

var terminalsSchema = new mongoose.Schema({

  name: String,
  flights: [flightsSchema],
  capacity: Number
});

var Terminal = mongoose.model("Terminal", terminalsSchema);

module.exports = Terminal;
