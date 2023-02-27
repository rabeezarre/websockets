import { createServer, Socket } from 'net';

const sockets = []

const server = createServer((socket) => {
  sockets.push(socket);

  // handle incoming data from the client
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);

    // send a response back to the client
    socket.write(`You said: ${data}`);
  });

  // handle socket closure
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

setInterval(() => {
    sockets.forEach((socket) => {
        socket.write('43.236122 76.892635 21.12321');
    })
}, 500)


server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
