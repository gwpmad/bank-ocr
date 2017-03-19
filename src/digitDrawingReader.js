const digitDrawings = require('./digitDrawings');
const { compose } = require('ramda');

const findMatch = (drawing) =>
	digitDrawings.find(digitDrawing => digitDrawing.drawing === drawing);

const extractValue = ((digit = {}) => digit.value);

module.exports = compose(extractValue, findMatch);
