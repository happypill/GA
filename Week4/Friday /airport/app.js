import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
// import favicon from 'serve-favicon';
import path from 'path';
import lessMiddleware from 'less-middleware';
import index from './routes/index';



mongoose.connect('mongodb://localhost/airport');

import Airport from './models/airport'
import Terminal from './models/terminal'
import Flights from './models/flights'
import Passenger from './models/passenger'

const app = express();
const debug = Debug('airport:app');

console.log("WORKING");
//Excercise- Creating Objects


mongoose.connection.on('error',console.error.bind(console,'connection error'));
let flight1 = Flights({
  from : "CDG France",
  to : "JFK New-York,USA",
  airline : "American AirLines",
  passengers:[]
});

let flight2 = Flights({
  from :"CDG France",
  to :"JFK New-York,USA",
  airline:"British AirWay",
  passengers:[]
});






flight1.save(function(err){
  if(err){
    console.log(err);
    return
  };
  console.log("Flight 1 created!");
});

flight2.save(function(err){
  if(err){
    console.log(err);
    return
  };
  console.log("Flight 2 created");
})

const startDate = new Date(1990,0,1).getTime();
const endDate = new Date(19901,0,1).getTime();
let randomTime = Math.floor(Math.random() * (endDate - startDate));
randomTime += startDate;

var terminal1 = Terminal({
  name:"Terminal 1",
  flights:[flight1,flight2],
  capacity:234324
});


terminal1.save(function(err) {
  if(err) {
    console.log(err);
    return;
  };

  console.log("Terminal 1 has been created!");

});
var airport1 = Airport({
  name:"JFK",
  country:"USA",
  terminal :[terminal1],
  opened: new Date(randomTime);
});

airport1.save(function(err){
  if(err){
    console.log(err);
    return
  };
  console.log("Airport 1 has been created");
})












// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
