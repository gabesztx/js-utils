const express = require('express');

const defaultConfig = require('../config');
const WebSocketServer = require('./services/webSocketServer');
const Realm = require('./models/realm');

const init = ({ app, server, options }) => {

  const config = options;
  const realm = new Realm();
  const messageHandler = require('./messageHandler')({ realm });
  const api = require('./api')({ config, realm, messageHandler });

  const { startMessagesExpiration } = require('./services/messagesExpire')({ realm, config, messageHandler });

  const checkBrokenConnections = require('./services/checkBrokenConnections')({
    realm, config, onClose: (client) => {
      app.emit('disconnect', client);
    }
  });
  app.use(options.path, api);
  const wss = new WebSocketServer({
    server,
    realm,
    config: {
      ...config,
    }
  });

  wss.on('connection', client => {
    console.log('ws connect');

    /*const messageQueue = realm.getMessageQueueById(client.getId());
    // console.log('wss connection');
    if (messageQueue) {
      let message;
      // eslint-disable-next-line no-cond-assign
      while (message = messageQueue.readMessage()) {
        messageHandler(client, message);
      }
      realm.clearMessageQueue(client.getId());
    }*/
    // app.emit('connection', client);
  });

  wss.on('message', (client, message) => {
    messageHandler(client, message);
    console.log('ws: message');
    // console.log('message', message);
    // app.emit('message', client, message);
  });

  wss.on('close', client => {
    console.log('------------- ws close -------------');
    // app.emit('disconnect', client);
  });

  wss.on('error', error => {
    // app.emit('error', error);
  });

  startMessagesExpiration();
  checkBrokenConnections.start();
};

function ExpressPeerServer(server, options) {
  const app = express();
  options = {
    ...defaultConfig,
    ...options
  };

  if (options.proxied) {
    app.set('trust proxy', options.proxied === 'false' ? false : options.proxied);
  }

  app.on('mount', () => {
    if (!server) {
      throw new Error('Server is not passed to constructor - ' +
        'can\'t start PeerServer');
    }

    init({ app, server, options });
  });

  return app;
}

exports = module.exports = {
  ExpressPeerServer: ExpressPeerServer,
};
