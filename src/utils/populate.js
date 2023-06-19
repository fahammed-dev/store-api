const dbConnect = require('../db/dbConnect');
const Product = require('../models/product.model');
const jsonData = require('../data/products.json');

require('dotenv').config();

const start = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonData);
    console.log('Seed successful!');
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

start();
