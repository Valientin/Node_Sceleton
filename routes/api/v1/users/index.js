const Router = require('express').Router;
const asyncMd = require('../../../../lib/helpers').asyncMiddleware;

const controllers = require('./controllers');

module.exports = Router({ mergeParams: true })
    .get('/v1/users/getUsers', asyncMd(controllers.getUsers));
