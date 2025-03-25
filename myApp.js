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

// Middleware to add current time to request object
const addTimeMiddleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

// Chained route with middleware and handler
app.get('/now', addTimeMiddleware, (req, res) => {
  res.json({ time: req.time });
});

// Start the server (optional, for testing purposes)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// /now route handler with chained middleware
// app.get('/now', function (req, res, next) {
//     req.time = new Date().toUTCString().replace('GMT', 'UTC');;
//     next();
//   },
//   function (req, res) {
//     res.send({
//       time: req.time
//     });
//   });














 module.exports = app;
