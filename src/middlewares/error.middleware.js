const { CustomAPIErrorClass } = require('../utils/customErrorObj');

const handleError = (err, _req, res, _next) => {
  if (err instanceof CustomAPIErrorClass) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: 'Something went wrong, please try again' });
};

module.exports = handleError;
