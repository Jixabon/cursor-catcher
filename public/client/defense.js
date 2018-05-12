var socket = io('http://nodejs-1.jixabon.com');

$(document).ready(function() {
    socket.emit('client_join', {username: "sherlock"});
    socket.on('test_recieve', function(data) {
        $(body).innerHTML = data.message;
    });
});