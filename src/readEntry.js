const digitDrawingReader = require('./digitDrawingReader');
const entrySplitter = require('./entrySplitter');
const { compose, map, join } = require('ramda');

module.exports = compose(
	Number,
	join(''),
	map(digitDrawingReader),
	entrySplitter
);
