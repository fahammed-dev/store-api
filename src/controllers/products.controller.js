const Product = require('../models/product.model');

const getAllProductsStatic = async (_req, res) => {
  res.status(200).json({ msg: 'product testing route' });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, select } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }; //regex
  }
  let result = Product.find(queryObject);

  // sort
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  // select
  if (select) {
    const selectList = select.split(',').join(' ');
    result = result.select(selectList);
  }

  // pagination through limit and skip
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};

module.exports = { getAllProductsStatic, getAllProducts };
