var config = require('./config.prod');

var express = require('express');
var path = require('path');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'));
app.use('/socket.io/socket.io.js', express.static(__dirname + '/node_modules/socket.io-client/dist/socket.io.js'));

app.listen(config.server.port, config.server.ip_address, () => {
    console.log(`Server running at http://${config.server.ip_address}:${config.server.port}/`);
});

var Game = require('./game/Game');

io.on('connection', function (socket) {

    var CursorCatcher = new Game(socket);

    socket.on('disconnect', function () {
        io.emit('user disconnected');
    });
});