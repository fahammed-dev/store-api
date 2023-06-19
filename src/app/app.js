// external import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// internal import
const notFound = require('../middlewares/notFound.middleware');
const handleError = require('../middlewares/error.middleware');
const healthRoute = require('../routes/health.route');

// configuration
require('dotenv').config();
const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.get('/health', healthRoute);

// error middleware
app.use(notFound);
app.use(handleError);

module.exports = app;
