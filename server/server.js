const server = require('http').createServer();
const io = require('socket.io')(server);

io.sockets.on('connection', (socket) => {
  socket.on('message', (data) => {
    socket.broadcast.emit('message', data);
  });
});

server.listen(3000);
