const express = require('express');
const app = express();
const routerConfig = require('./config/router-config.js');
const appConfig = requie('./config/main-config.js');

appConfig.init();
routerConfig.init(app);

module.exports = app;