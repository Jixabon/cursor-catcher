var socket = io.connect('http://cursor-catcher-cursor-catcher.7e14.starter-us-west-2.openshiftapps.com:8000/',{'forceNew':true });

$(document).ready(function() {
    socket.emit('client_join', {username: "sherlock"});
    socket.on('test_recieve', function(data) {
        $(body).innerHTML = data.message;
    });
});