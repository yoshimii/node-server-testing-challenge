const express = require('express');
const server = express();
const notFound = require('./middleware/notFound.js')

const resourceRouter = require('./resource/resource-router.js');
const errorHandler = require('./middleware/errorHandler.js');

const helmet = require('helmet');
const cors = require('cors');


server.use(helmet())
server.use(cors());


server.use(express.json());
server.use('/api', resourceRouter);


server.use(notFound);
server.use(errorHandler);

module.exports = server;