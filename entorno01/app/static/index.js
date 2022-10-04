document.addEventListener('DOMContentLoaded', () => {
var socket = io();
    socket.on('connect', function() {
        document.querySelectorAll("button").forEach(button =>{
            button.onclick = () => {
                const vote = button.dataset.vote;
                socket.emit('send',{"vote":vote})
            };
        })
        // button = document.querySelectorAll("button")[1]
        // button.dateset.vote
        // button = document.querySelectorAll("button")[2]
        // button.dateset.vote
        // socket.emit('my event', {data: 'I\'m connected!'});
    });
});

