const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {
  console.log('Un usuario se ha conectado');

  socket.on('join', room => {
    console.log(`El usuario ${socket.id} se ha unido a la sala ${room}`);
    socket.join(room);
    
    // Si hay 2 usuarios en la sala, se inicia la partida
    const clientsInRoom = io.sockets.adapter.rooms.get(room);
    if (clientsInRoom.size === 2) {
      io.to(room).emit('startGame');
    }
  });

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });

  socket.on('move', move => {
    console.log(`Se ha movido una pieza: ${move}`);
    socket.broadcast.emit('move', move);
  });
});

http.listen(3000, () => {
  console.log('Servidor de sockets corriendo en el puerto 3000');
});
