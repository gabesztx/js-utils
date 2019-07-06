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


/*
const API_KEY = '58ff6da10a2ab4510611b2d6dafcb165-2b0eef4c-3e3d7643';
const DOMAIN = 'gabesztx@gmail.com';
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const sendMail = () => {
  const data = {
    from: 'Zita&Gabesz <zitugabesz@hazasodunk.hu>',
    to: 'gabesztx@gmail.com',
    subject: 'Zitu és Gabesz wedding',
    text: 'Köszi hogy jössz, várunk szeretettel! :)'
  };

  mailgun.messages().send(data, (error, body) => {
    console.log('OK!');
    console.log(body);
  });

};*/
