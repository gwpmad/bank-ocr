const digitDrawingReader = require('./digitDrawingReader');
const entrySplitter = require('./entrySplitter');
const { compose, map, join } = require('ramda');

module.exports = compose(
	entry => ({ value: entry }),
	join(''),
	map(digitDrawingReader),
	entrySplitter
);
