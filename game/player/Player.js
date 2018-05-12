// Class
function Player(socket, username) {
    // user infromation
    this.username = username;
    this.email = "email@gmail.com";
    this.wins = 1;
    this.losses = 0;
    
}
module.exports = Player;