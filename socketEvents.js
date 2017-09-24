exports = module.exports = function(io) {
    const nsp = io.of('/chat');
    nsp.on('connection', (socket) => {
        socket.join('Lobby');
        socket.on('chat mounted', function(username) {
          socket.emit('receive socket', socket.id)
        });
        console.log('a user connected');
        //on channel entry, join broadcast channel
        socket.on('enter channel', (channel) => {
            socket.join(channel);
            console.log('joined ' + channel);
        });
        socket.on('leave channel', (channel) => {
            socket.leave(channel);
            console.log('left ' + channel);
        });
        socket.on('new message', (channel) => {
            io.sockets.in(channel).emit('refresh messages', channel);
            console.log('a new message');
        });
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}
// individual messenger vs group chat?