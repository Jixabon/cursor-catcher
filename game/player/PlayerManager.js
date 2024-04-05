// Imports
var Player = require('./Player');

// Class
function PlayerManager(socket_io) {
    // List of players
    this.players = [];

    // Getters
    this.getPlayers = function () {
        return this.players;
    }

    this.addPlayer = function(username) {
        return this.players.push(new Player(socket_io, username));
    }
    
}
module.exports = PlayerManager;