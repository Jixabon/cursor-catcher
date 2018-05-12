// Imports
var Room = require('./Room');

// Class
function RoomManager(socket) {
    // List of rooms
    this.rooms = [];
    // queue's
    this.rooms.push(new Room());   
}
module.exports = RoomManager;