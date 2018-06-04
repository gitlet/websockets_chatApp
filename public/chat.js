// Make connection
var socket = io.connect('http://localhost:3000');

// Query DOM
var output = document.getElementById('output');
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var sendBtn = document.getElementById('send');
var feedback = document.getElementById('feedback');

// Emit events

sendBtn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

// broadcasting the message
message.addEventListener('keypress', function() {
  socket.emit('typing', handle.value);
});

// Listening for events

socket.on('chat', function(data) {
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>' + data.handle + '</strong> ' + data.message + '</p>'
});

// Broadcast handling and displaying
socket.on('typing', function(data) {
  feedback.innerHTML = '<p><em>' + data + ' is typing... </em></p>';
});
