document.addEventListener('DOMContentLoaded', () => {
var socket = io();
    socket.on('connect', function() {
        // document.querySelectorAll("button");
        socket.emit('my event', {data: 'I\'m connected!'});
    });
});

