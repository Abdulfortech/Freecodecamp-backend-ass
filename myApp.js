let express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();

absolutePath = __dirname + '/views/index.html';

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    // res.send('Hello Express');
    res.sendFile(absolutePath);
});

// /now route handler with chained middleware
app.get('/now', function (req, res, next) {
    req.time = new Date().toUTCString().replace('GMT', 'UTC');;
    next();
  },
  function (req, res) {
    res.send({
      time: req.time
    });
  });














 module.exports = app;
