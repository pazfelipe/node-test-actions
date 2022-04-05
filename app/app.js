const express = require('express');
const http = require('http');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

const server = http.createServer(app);

module.exports = server;