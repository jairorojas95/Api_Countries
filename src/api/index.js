//Exports all endpoints of availability
const express = require('express');
const genericRoutes = express.Router();

const DataSelect = require('./DataSelect');

genericRoutes.use('/DataSelect', DataSelect);

module.exports = genericRoutes;
