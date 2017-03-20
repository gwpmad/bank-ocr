const test = require('tape');
const { exec } = require('child_process');
const { split, compose } = require('ramda');
const parseDocument = require('../../../src/parseDocument');

const stripLastLine = output => output.slice(0, output.lastIndexOf('\n'));

const writeTestData = (cb) => exec('node bin/write-test-data.js one 30', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}

	compose(cb, Number, split('\n'), stripLastLine)(stdout);
});

test.only('Use case one', (t) => {
	t.plan(30);
	writeTestData(correctAnswers =>
		parseDocument('../../data/use-case-one/test-document.txt', (result) =>
			result.forEach((parsedEntry, idx) => t.equal(parsedEntry[idx], correctAnswers[idx]))
		)
	)
});
