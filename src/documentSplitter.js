const fs = require('fs');
const { compose, map, range } = require('ramda');

const CHARS_PER_LINE = 28;
const LINES_PER_ENTRY = 4;

const getNthEntry = file => n => {
	const charsPerEntry = CHARS_PER_LINE * LINES_PER_ENTRY;
	const [startIdx, stopIdx] = [n * charsPerEntry, ((n + 1) * charsPerEntry) - 1];
	return file.slice(startIdx, stopIdx);
};

const splitIntoEntries = (file) => {
	const numberOfEntries = (file.split('\n').length) / LINES_PER_ENTRY;
	return map(getNthEntry(file), range(0, numberOfEntries));
};

module.exports = (filePath, cb) => {
	fs.readFile(filePath, 'utf8', (err, file) => {
		if (err) {
			console.error(`error reading ${filePath}: ${err}`);
			return;
		}
	
		const splitDocument = splitIntoEntries(file);
		cb(splitDocument);
	});
}

// how do callbacks work inside - why are they only called when the info is received

// is it possible to compose asynchronous functions
