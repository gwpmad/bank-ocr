const digitDrawingReader = require('./digitDrawingReader');
const entrySplitter = require('./entrySplitter');
const { compose, map, join } = require('ramda');

module.exports = compose(
	entry => ({ value: entry, illegible: entry.includes('?') }),
	join(''),
	map(digitDrawingReader),
	entrySplitter
);
