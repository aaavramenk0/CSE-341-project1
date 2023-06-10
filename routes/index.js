const { awesomeFunction } = require('../controllers');

const routes = require('express').Router();
 
routes.get('/', awesomeFunction);

module.exports = routes;