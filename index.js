const express = require('express');
const socket = require('socket.io');

// Setting up app
var app = express();

// Setting up server
var server = app.listen(3000, () => {console.log('Listening at port 3000..');});

// Serving the local assets
app.use(express.static('public'));

// Setting up socket
var io = socket(server);

io.on('connection', function(socket) {
  console.log('Made socket connection..', socket.id);

  // Handle chat event
  socket.on('chat', function(data) {
    io.sockets.emit('chat', data);
  });

  // Broadcast the typing event
  socket.on('typing', function(data) {
    socket.broadcast.emit('typing', data);
  });
});
