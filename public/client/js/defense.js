var socket = io('http://home.jixabon.com/');

$(document).ready(function() {
    // -- Crate Playing Field --
    // theTimeer
    var theTimerElem = $('<div></div>')
    .attr('id', 'theTimer')
    .text('00:00.00');

    // theRing
    var theRingElem = $('<div></div>')
    .attr('id', 'theRing');

    $('body').prepend(theRingElem)
    .prepend(theTimerElem);

    // -- Logic --
    var ringOffset = $('#theRing').offset();
    $(window).resize(function() {
        ringOffset = $('#theRing').offset();
    });

    socket.emit('client_join', {username: "defense"});
    $('#theRing').mousemove(function( event ) {
        socket.emit('defensive_cursor_pos_send', {
            x: (event.pageX - ringOffset.left),
            y: (event.pageY - ringOffset.top)
        });
    });
});