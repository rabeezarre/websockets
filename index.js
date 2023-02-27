import { Socket } from 'net';
import express from 'express';

const client = new Socket();

const db = {};

client.connect(3000, 'localhost', () => {
  console.log('Connected to server');
});

// handle incoming data from the server
client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
    // TODO: put data into database (prefferable postgres) instead of a variable
    // id long lat station status

    db[data] = true;
});

// handle socket closure
client.on('close', () => {
  console.log('Connection closed');
});

const app = express();

app.get('/get-repairworks', (_, res) => {
  // handle GET request to /hello endpoint
  res.send(db);
});

app.listen(3001, () => {
  console.log('Server listening on port 3000');
});
