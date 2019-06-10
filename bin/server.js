'use strict';

const app = require('../app');
const http = require('http');
const debug = require('debug')('nodeapi:server');

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('Server listening on port ' + port);

function normalizePort(value) {
  const port = parseInt(value, 10);

  if (isNaN(port)) {
    return value;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  const errors = {
    EACCES: bind + ' requires elevated privileges',
    EADDRINUSE: bind + ' is already in use',
  };
  if (!errors[error.code]) {
    throw error;
  }
  showError(errors[error.code]);
}

function showError(messageError) {
  console.error(messageError);
  process.exit(1);
}

function onListening() {
  const address = server.address();
  const bind = typeof address === 'string' ?
    'pipe ' + address :
    'port ' + address.port;
  debug('Listening on ' + bind);
}