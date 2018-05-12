var socket = io('http://nodejs-1.jixabon.com');

$(document).ready(function() {
    socket.emit('client_join', {username: "sherlock"});
    socket.emit('test_send', {message: "scroll"});
});