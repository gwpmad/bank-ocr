const documentSplitter = require('./documentSplitter');
const readEntry = require('./readEntry');
const { compose, map } = require('ramda');

module.exports = {
	one(filePathToRead, cb) {
		return documentSplitter(filePathToRead, (splitDocument) =>
			compose(cb, map(readEntry))(splitDocument)
		);
	}
}
