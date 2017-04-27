//require dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 8008;

//middlewear
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index.html')
});

//port listener
app.listen(port, function() {
  console.log(port);
});
