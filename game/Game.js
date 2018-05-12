// Imports
var PlayerManager = require('./player/PlayerManager');

// Class
function Game(socket) {
    // inlcudes
    var PlayerManager = require('./player/PlayerManager');
    var PlayerManager = new PlayerManager;

    var RoomManager = require('./room/RoomManager');
    var RoomManager = new RoomManager;
    // Game Logic
    // in the form of io emits and ons

    socket.on('client_join', function(data){
        console.log(PlayerManager.addPlayer(data.username));
        console.log(PlayerManager.getPlayers());
    });

    socket.on('test_send', function(data) {
        socket.emit('test_recieve', data);
    });

}
module.exports = Game;

