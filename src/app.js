const express = require('express');
const app = express();
const routerConfig = require('./config/router-config.js');

routerConfig.init(app);

module.exports = app;