require('dotenv').config();
require('babel-register');

const express = require('express');

const vhost = require('vhost');
const logger = require('morgan');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.dev');
const cors = require('./util/cors');
const compiler = webpack(webpackConfig);
const serverConfig = require('./config/config').getConfigByEnv();
const app = express();

if (!module.parent) {
  app.use(logger('dev'));
}
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));

require('./config/express')(app);
require('./config/reactRoutes')(app);

app.use(cors);

const site = module.exports = express();
site.use(vhost('dev.furora.media', app));


if (!module.parent) {
  site.listen(serverConfig.port, 'localhost', (err) => {
    if (err) {
      console.log(err)
    }
    console.log(`Listening at http://localhost:${serverConfig.port}`);
  });
}
