var config = require('./config.prod');

var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(config.server.port, config.server.ip_address, () => {
  console.log(`Server running at http://${config.server.ip_address}:${config.server.port}/`);
});

app.use(express.static('public'));
app.use(express.static('node_modules/socket.io-client/dist'));

var Game = require('./game/Game');

io.on('connection', function (socket) {

    var CursorCatcher = new Game(socket);

    socket.on('disconnect', function () {
        io.emit('user disconnected');
    });
});