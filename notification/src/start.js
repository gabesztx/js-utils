import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';

import { checkUser } from './server/services/userHandler';

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

app.use(cookieParser());

app.get('/', (req, res) => {
    checkUser(req, res);
    res.send('Page');
    // setTimeout(() => {}, 2000);
});


server.listen(port, () => console.log('---- Server run: ' + port + ' ----'));
/*
async function setUserDataToJson(res) {
    await writeFile();
}
*/
