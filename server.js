const express = require('express');

const morgan = require('morgan');
const helmet = require('helmet');

const carsRouter = require('./cars/carsRouter');

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(helmet());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h1>Activate interlock!</h1>
    <h1>Dynotherms connected!</h1>
    <h1>Infracells up!</h1>
    <h1>Megathrusters are go!</h1>
    `);
});

module.exports = server;
