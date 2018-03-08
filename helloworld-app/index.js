const express = require('express');
const morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('Hello World! (v1)');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});