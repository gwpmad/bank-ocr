const documentSplitter = require('../../src/documentSplitter');
const testSplitDocument = require('../data/use-case-one/test-split-document');
const test = require('tape');

test('Document splitter', (t) => {
	t.plan(3);
	documentSplitter(`${__dirname}/../data/use-case-one/test-document.txt`, entries =>
		entries.forEach((entry, idx) =>
			t.deepEqual(entry, testSplitDocument[idx], 'should split the document into an array of its constituent entries'))
	);
});
