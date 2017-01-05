const express = require('express');
const mail = require('./mail');

const routes = express.Router();

routes.use('/mail', mail);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
