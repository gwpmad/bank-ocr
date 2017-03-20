const readEntry = require('../../src/readEntry');
const test = require('tape');
const testEntries = require(`../data/use-case-one/test-entries`);

test('Read a single entry', (t) => {
	t.equal(readEntry(testEntries[0]), 000000000);
	t.equal(readEntry(testEntries[1]), 111111111);
	t.equal(readEntry(testEntries[2]), 222222222);
	t.equal(readEntry(testEntries[3]), 333333333);
	t.equal(readEntry(testEntries[4]), 444444444);
	t.equal(readEntry(testEntries[5]), 555555555);
	t.equal(readEntry(testEntries[6]), 666666666);
	t.equal(readEntry(testEntries[7]), 777777777);
	t.equal(readEntry(testEntries[8]), 888888888);
	t.equal(readEntry(testEntries[9]), 999999999);
	t.equal(readEntry(testEntries[10]), 123456789);

	t.end();
});
