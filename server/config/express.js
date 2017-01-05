const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const compression = require('compression');
const api = require('../api');
const forceSSL = require('../util/ssl');

const config = require('./config');

const serverConfig = config.getConfigByEnv();

const expressConfig = (app) => {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'ejs');
  // app.use(favicon(path.join(__dirname, '../favicon.ico')));
  app.use(compression());
  //app.use(bodyParser.urlencoded({ extended: true }));
  //app.use(bodyParser.json());
  //app.use(forceSSL);
  app.use('/static', express.static(path.join(__dirname, serverConfig.path), {
    maxAge: serverConfig.cacheTime,
  }));
  // app.use('/api/v1', api);

};

module.exports = expressConfig;
