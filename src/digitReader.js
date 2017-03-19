const digits = require('./digits');
const { compose } = require('ramda');

const findMatch = (drawing) =>
	digits.find(digit => digit.drawing === drawing);

const extractValue = ((digit = {}) => digit.value);

module.exports = compose(extractValue, findMatch);
