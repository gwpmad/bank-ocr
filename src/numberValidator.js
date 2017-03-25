const { addIndex, compose, map, prop, split, reduce, reverse } = require('ramda');
const reduceIndexed = addIndex(reduce);

const ACCOUNT_NUMBER_LENGTH = 9;

const accumulateChecksum = (acc, digit, idx) => acc + (digit * (idx + 1));
const validateChecksum = checksum => checksum % 11 === 0;

module.exports = value => {
	if (value.length !== ACCOUNT_NUMBER_LENGTH) return false;
	return compose(
		validateChecksum,
		reduceIndexed(accumulateChecksum, 0),
		map(Number),
		reverse,
		split('')
	)(value);
};
