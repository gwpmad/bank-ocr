const { addIndex, compose, map, prop, split, reduce, reverse } = require('ramda');
const reduceIndexed = addIndex(reduce);

const accumulateChecksum = (acc, digit, idx) => acc + (digit * (idx + 1));
const validateChecksum = checksum => checksum % 11 === 0;

module.exports = parsedEntry =>
	compose(
		validateChecksum,
		reduceIndexed(accumulateChecksum, 0),
		map(Number),
		reverse,
		split(''),
		prop('value')
	)(parsedEntry);
