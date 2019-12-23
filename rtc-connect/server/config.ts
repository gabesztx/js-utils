import * as fs from 'fs';
import * as path from 'path';

export const rootPath = '../client/';
export const serverPort = 3000;
const isDev = process.env.NODE_ENV === 'dev';
const cert = {
  key: isDev ? path.join(__dirname, '../cert/server.key') : '/etc/letsencrypt/live/gabesztx.duckdns.org/privkey.pem',
  cert: isDev ? path.join(__dirname, '../cert/server.crt') : '/etc/letsencrypt/live/gabesztx.duckdns.org/cert.pem',
  ca: isDev ? path.join(__dirname, '../cert/server.csr') : '/etc/letsencrypt/live/gabesztx.duckdns.org/chain.pem',
};
export const httpsOption = {
  key: fs.readFileSync(cert.key),
  cert: fs.readFileSync(cert.cert),
  ca: fs.readFileSync(cert.ca),
};

