const documentSplitter = require('./documentSplitter');
const numberValidator = require('./numberValidator');
const readEntry = require('./readEntry');
const { compose, map, set } = require('ramda');

const checkIfValid = obj => Object.assign(obj, { valid: numberValidator(obj.value) });

module.exports = {
	one(filePathToRead, cb) {
		return documentSplitter(filePathToRead, (splitDocument) =>
			compose(cb,
				map(readEntry)
			)(splitDocument)
		);
	},

	two(filePathToRead, cb) {
		return documentSplitter(filePathToRead, (splitDocument) =>
			compose(cb,
				map(checkIfValid),
				map(readEntry)
			)(splitDocument)
		);
	}
}
