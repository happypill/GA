import mongoose from 'mongoose';
import Passenger from './passenger';

var passengerSchema = require('mongoose').model('Passenger').schema;
const flightsSchema = new mongoose.Schema({
   from : String,
   to : String,
   airline : String,
   passengers:[passengerSchema]
});

const Flights = mongoose.model('Flights',flightsSchema);
module.exports = Flights;
