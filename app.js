var config = require('./config.dev');

var express = require('express');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

server.listen(config.server.port, () => {
    console.log(`Server running at http://${config.server.ip_address}:${config.server.port}/`);
});

var Game = require('./game/Game');

io.on('connection', function (socket) {

    var CursorCatcher = new Game({io: io, socket: socket});

    socket.on('disconnect', function () {
        io.emit('user disconnected');
    });
});