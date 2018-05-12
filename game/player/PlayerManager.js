// Imports
var Player = require('./Player');

// Class
function PlayerManager(socket) {
    // List of players
    this.players = [];

    // Getters
    this.getPlayers = function () {
        return this.players;
    }

    this.addPlayer = function(username) {
        var player = new Player(socket, username);
        player.username = username;
        return this.players.push(player);
    }
    
}
module.exports = PlayerManager;