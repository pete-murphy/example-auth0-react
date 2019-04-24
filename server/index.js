require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.get('/', (_req, res) => {
  res.status(200).json({ message: 'Success' });
});

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan('dev'));
server.use(helmet());
server.use(cors());

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
