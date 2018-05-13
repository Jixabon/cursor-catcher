var socket = io();

$(document).ready(function() {
    socket.emit('client_join', {username: "sherlock"});
    socket.emit('test_send', {message: "scroll"});
});