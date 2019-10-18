const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const ExpressPeerServer = require('peer').ExpressPeerServer;
const port = 9000;
const appFolder = '../dist/rtc-angular/';
const options = {
  debug: true
};
const peerserver = ExpressPeerServer(server, options);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, appFolder, '/index.html'));
});
app.use(express.static(path.join(__dirname, appFolder)));
app.use('/peerjs', peerserver);

server.listen(port, () => {
  console.log('Server ' + app.name + ' listening on http://localhost:' + port)
});
