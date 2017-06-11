import mongoose from 'mongoose';
import Terminal from './terminal';

var terminalsSchema= require('mongoose').model('Terminal').schema;
const airportSchema = new mongoose.Schema({
    name  : String,
    country    : String,
    terminal  :[terminalsSchema],
    opened     : Date

});

const Airport = mongoose.model('Airport',airportSchema);

module.exports = Airport;
