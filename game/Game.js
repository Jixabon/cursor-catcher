// Imports
var PlayerManager = require('./player/PlayerManager');

// Class
function Game(socket_io) {
    // inlcudes
    var PlayerManager = require('./player/PlayerManager');
    var PlayerManager = new PlayerManager(socket_io);

    var RoomManager = require('./room/RoomManager');
    var RoomManager = new RoomManager(socket_io);
    // Game Logic
    // in the form of io emits and ons

    this.getSockets
    socket_io.socket.on('client_join', function(data){
        PlayerManager.addPlayer(data.username);
        PlayerManager.getPlayers();
        console.log(data.username + " connected.");
    });

    socket_io.socket.on('defensive_cursor_pos_send', function(data) {
        socket_io.io.emit('defensive_cursor_pos', data);
    });

}
module.exports = Game;

