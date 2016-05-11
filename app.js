var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('static'));

app.get('/msg/:guid', function (req, res) {
  console.log('MSG: ' + req.url);
  io.emit('msg', req.params.guid );
  res.status(200).send({ message: 'Message accepted' });
});

io.on('connection', function(socket){
  console.log('socket.io connect');
  socket.on('disconnect', function () {
    console.log('socket.io disconnect');
  });
});

var port = process.env.PORT || 3000;
http.listen(port, function () {
  console.log('Listening on port ' + port);
});

