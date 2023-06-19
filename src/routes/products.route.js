// external import
const express = require('express');

// internal import
const {
  getAllProductsStatic,
  getAllProducts,
} = require('../controllers/products.controller');

const router = express.Router();

router.route('/static').get(getAllProductsStatic);
router.route('/').get(getAllProducts);

module.exports = router;
