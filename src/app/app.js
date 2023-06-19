// external import
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// internal import
const notFound = require('../middlewares/notFound.middleware');
const handleError = require('../middlewares/error.middleware');
const healthRoute = require('../routes/health.route');
const productsRoute = require('../routes/products.route');

// configuration
require('dotenv').config();
require('express-async-errors');
const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.use('/health', healthRoute);
app.use('/api/v1/products', productsRoute);

// error middleware
app.use(notFound);
app.use(handleError);

module.exports = app;
