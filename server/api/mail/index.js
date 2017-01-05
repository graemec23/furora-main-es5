const express = require('express');
// const gmail = require('./gmail');
// const mailGun = require('./mailGun');

const mail = express.Router();

// mail.post('/gmail', gmail);
// mail.post('/mailGun', mailGun);

mail.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = mail;
