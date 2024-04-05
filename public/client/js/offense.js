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

    // defensiveCursor
    var defensiveCursorElem = $('<div></div>')
    .attr('id', 'defensiveCursor');

    // theNet
    var theNetElem = $('<div></div>')
    .attr('id', 'theNet');

    $('body').prepend($(theRingElem).append(theNetElem).append(defensiveCursorElem))
    .prepend(theTimerElem);

    // -- Logic --
    var ringOffset = $('#theRing').offset();
    $(window).resize(function() {
        ringOffset = $('#theRing').offset();
    });

    // track the net
    var isDragging = false;
    var netOffset = $('#theNet').offset();
    $('body')
    .on('mousedown', '#theRing', function(event) {
        isDragging = true
        var netOffset = $('#theNet').offset();
        $('#theNet')
        .css('top', (event.pageY - netOffset.top))
        .css('left', (event.pageX - netOffset.left));
        $('body').on('mousemove', '#theRing', function(event) {
            if (isDragging) {
                var netOffset = $('#theNet').offset();
                $('#theNet')
                .css('width', (event.pageX - netOffset.left))
                .css('height', (event.pageY - netOffset.top));
            }
        });
    })
    .on('mouseup', function(event) {
        $('body').off("mousemove");
        isDraggin = false;
        $('#theNet')
        .css('top', '0px')
        .css('left', '0px')
        .css('width', '0px')
        .css('height', '0px');

    });

    socket.emit('client_join', {username: "offense"});
    socket.on('defensive_cursor_pos', function(data) {
        $('#defensiveCursor')
        .css('top', data.y + 'px')
        .css('left', data.x + 'px');
    });
});