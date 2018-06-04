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
});
