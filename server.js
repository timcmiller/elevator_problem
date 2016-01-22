var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

app.use(function(req, res) {
  res.status(404).send('could not find file');
});

app.listen(port, function() {
  console.log('Server up and running on PORT ' + port + '.');
});
