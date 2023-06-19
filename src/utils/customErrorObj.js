class CustomAPIErrorClass extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const customErrorObj = (message, statusCode) => {
  return new CustomAPIErrorClass(message, statusCode);
};

module.exports = { customErrorObj, CustomAPIErrorClass };
