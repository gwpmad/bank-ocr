const digitDrawingReader = require('./digitDrawingReader');
const { compose, map, range, split, join, reduce } = require('ramda');

const DIGITS_PER_ENTRY = 9;
const DIGIT_WIDTH = 3;
const logr = (data) => console.log('data',data) || data;

const digitsPerEntryRange = range(0, DIGITS_PER_ENTRY);

const stripBlankLine = entry => {
	const blankLineLength = (DIGITS_PER_ENTRY * DIGIT_WIDTH) + 1;
	return entry.slice(0, entry.length - blankLineLength);
};

const splitLineIntoDigitParts = line => map(i => {
	const [startIdx, stopIdx] = [i * DIGIT_WIDTH, (i + 1) * DIGIT_WIDTH];
	return line.slice(startIdx, stopIdx);
}, digitsPerEntryRange);

const getPartsOfDigit = (i, lines) => reduce((acc, line) => acc.concat(line[i]), [], lines);

const assembleDigits = lines => map(i => getPartsOfDigit(i, lines), digitsPerEntryRange);

const joinByNewline = digitParts => join('\n', digitParts);

const splitEntryIntoDigitDrawings = (entry) => compose(
	logr,
	map(joinByNewline),
	assembleDigits,
	map(splitLineIntoDigitParts),
	split('\n'),
	stripBlankLine
)(entry);

module.exports = compose(
	Number,
	join(''),
	map(digitDrawingReader),
	splitEntryIntoDigitDrawings
);
