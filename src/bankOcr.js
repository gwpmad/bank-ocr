const documentSplitter = require('./documentSplitter');
const numberValidator = require('./numberValidator');
const readEntry = require('./readEntry');
const { compose, map, set } = require('ramda');

module.exports = {
	one(filePathToRead, cb) {
		return documentSplitter(filePathToRead, (splitDocument) =>
			compose(cb,
				map(entry => ({ value: readEntry(entry) }))
			)(splitDocument)
		);
	},

	two(filePathToRead, manualEntrie, cb) {
		const addValidProperty = obj => Object.assign(obj, { valid: numberValidator(obj.value) });
		return documentSplitter(filePathToRead, (splitDocument) =>
			compose(cb,
				map(addValidProperty),
				map(entry => ({ value: readEntry(entry) }))
			)(splitDocument)
		);
	}
}
