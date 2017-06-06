const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// init express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const candiesController = require('./controller/candies')(app);



app.listen(3000, () => {
  console.log('Node.js Listening on port 3000');
});
