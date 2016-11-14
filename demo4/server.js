var express = require('express');
var app = express();

app.use(express.static('public')); // Statische Dateien aus dem Ordner public ausliefern

var server = app.listen(3000, function () {
    console.log('Chat app listening at http://localhost:3000');
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.username = "Guest" + Math.round(Math.random()*5000);
    io.emit('message', '<strong>' + socket.username + '</strong> connected'); // An alle: Benutzer ist verbunden
    socket.on('message', function (data) { // Benutzer hat eine Nachricht gesendet
        io.emit('message', '<strong>' + socket.username + '</strong>' + ': ' + data); // An alle: Nachricht von Benutzer
    });
    socket.on('disconnect',function() { // Benutzer hat den Chat verlassen
        io.emit('message', '<strong>' + socket.username + '</strong> disconnected'); // An alle: Benutzer ist nicht
        // mehr verbunden
    });
});