import * as fs from 'fs';
import * as path from 'path';

export const env = process.env.NODE_ENV;
export const rootPath = '../client/';
export const serverPort = 3000;

const cert = {
  key: env === 'dev' ? path.join(__dirname, '../cert/server.key') : '/etc/letsencrypt/live/gabesztx.duckdns.org/privkey.pem',
  cert: env === 'dev' ? path.join(__dirname, '../cert/server.crt') : '/etc/letsencrypt/live/gabesztx.duckdns.org/cert.pem',
  ca: env === 'dev' ? path.join(__dirname, '../cert/server.csr') : '/etc/letsencrypt/live/gabesztx.duckdns.org/chain.pem',
};
export const httpsOption = {
  key: fs.readFileSync(cert.key),
  cert: fs.readFileSync(cert.cert),
  ca: fs.readFileSync(cert.ca),
};

