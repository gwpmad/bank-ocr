const test = require('tape');
const { exec } = require('child_process');
const { map, split, compose } = require('ramda');
const parseDocument = require('../../../src/bankOcr').one;

const NUMBER_OF_TEST_ENTRIES = 30;

const stripLastLine = output => {
	const outputSplitIntoLines = output.split('\n');
	return outputSplitIntoLines.slice(0, outputSplitIntoLines.length - 2);
}

const writeTestData = (cb) => exec(`node bin/write-test-data.js one ${NUMBER_OF_TEST_ENTRIES}`, (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}

	compose(cb, map(Number), stripLastLine)(stdout);
});

test('Use case one - parses the document and returns the account numbers', (t) => {
	t.plan(NUMBER_OF_TEST_ENTRIES);
	writeTestData(correctAnswers =>
		parseDocument(`${__dirname}/../../data/use-case-one/autogenerated-test-document.txt`, (result) =>
			result.forEach((parsedEntry, idx) => t.equal(parsedEntry, correctAnswers[idx]))
		)
	)
});
