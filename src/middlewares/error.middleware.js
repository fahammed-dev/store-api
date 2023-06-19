const handleError = (err, _req, res, _next) => {
  if (err instanceof Error) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: 'Something went wrong, please try again' });
};

module.exports = handleError;
