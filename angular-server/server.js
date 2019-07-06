const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(express.static(`${path.join(__dirname)}/dist`));
app.use(bodyParser.json());


app.post('/post', (req, res) => {
  res.send(req.body)
});

server.listen(port, () => console.log('server is running!'));

// app.get('/get', (req, res) => {res.send('GET')});
// app.get('/', (req, res) => res.sendFile(path.join(__dirname)));
