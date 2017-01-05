const express = require('express');
const config = require('./config/config');
const expressConfig = require('./config/express');
const reactRoutes = require('./config/reactRoutes');

const app = express();
const serverConfig = config.getConfigByEnv();

expressConfig(app);
reactRoutes(app);

app.listen(serverConfig.port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('listening on port', serverConfig.port);
  }
});

export default app;
