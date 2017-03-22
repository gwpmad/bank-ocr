const documentSplitter = require('./documentSplitter');
const readEntry = require('./readEntry');
const { map } = require('ramda');

module.exports = {
	one(filePathToRead, cb) {
		return documentSplitter(filePathToRead, (splitDocument) => {
			const parsedDocument = map(readEntry, splitDocument);
			cb(parsedDocument);
		});
	}
}
