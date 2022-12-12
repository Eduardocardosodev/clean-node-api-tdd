const MissingParamError = require('./missing-param-error');
const InvalidParamError = require('./invalid-param-error');
const ServerError = require('./server-error');
const UnauthorizedError = require('./unathorized-error');

module.exports = {
  MissingParamError,
  InvalidParamError,
  ServerError,
  UnauthorizedError,
};