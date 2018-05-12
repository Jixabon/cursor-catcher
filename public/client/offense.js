var socket = io('http://cursor-catcher-cursor-catcher.7e14.starter-us-west-2.openshiftapps.com');

$(document).ready(function() {
    socket.emit('client_join', {username: "sherlock"});
    socket.emit('test_send', {message: "scroll"});
});