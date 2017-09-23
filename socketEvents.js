exports = module.exports = function(io) {
    io.on('connection', (socket) => {
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
        });
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}
// individual messenger vs group chat?