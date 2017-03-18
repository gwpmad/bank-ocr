const digits = require('./digits');
const { compose } = require('ramda');

const findMatch = (representation) =>
	digits.find(digit => digit.representation === representation);

const extractValue = ((digit = {}) => digit.value);

module.exports = compose(extractValue, findMatch);
