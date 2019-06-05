const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function getUserInput(data) {
  let errors = {};
  data.id = !isEmpty(data.id) ? data.id : '';

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
