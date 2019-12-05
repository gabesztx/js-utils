const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const port = 3000;
const appFolder = '../dist/media-stream/';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, appFolder, '/index.html'));
});
app.use(express.static(path.join(__dirname, appFolder)));

server.listen(port, () => {
  console.log('Server ' + app.name + ' listening on http://localhost:' + port)
});

