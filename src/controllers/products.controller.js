const getAllProductsStatic = async (_req, res) => {
  res.status(200).json({ msg: 'product testing route' });
};

const getAllProducts = async (_req, res) => {
  res.status(200).json({ msg: 'products route' });
};

module.exports = { getAllProductsStatic, getAllProducts };
