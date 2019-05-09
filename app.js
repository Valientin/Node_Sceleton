const express = require('express');
const _ = require('lodash');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];

global.gConfig =  _.merge(defaultConfig, environmentConfig);

const exceptionHandler = require('./lib/middleware/exception-handler');
const logger = require('./lib/logger');
const router = require('./routes/createRouter.js')();
const database = require('./database')();

const app = express()
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan('tiny'))
    .use((req, res, next) => {
        req.base = `${req.protocol}://${req.get('host')}`;
        req.db = database;

        return next()
    })
    .use('/api', router)
    .use(exceptionHandler);

if (!module.parent) {
    const port = global.gConfig.node_port || 3000;

    app.listen(port, () => {
        logger.info(`Server started on port: ${port}`);
    });
}
