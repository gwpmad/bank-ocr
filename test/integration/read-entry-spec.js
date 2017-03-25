const readEntry = require('../../src/readEntry');
const testEntries = require(`../data/use-case-one/test-entries`);
const test = require('tape');

test('Read a single entry', (t) => {
	t.deepEqual(readEntry(testEntries[0]), '000000000');
	t.deepEqual(readEntry(testEntries[1]), '111111111');
	t.deepEqual(readEntry(testEntries[2]), '222222222');
	t.deepEqual(readEntry(testEntries[3]), '333333333');
	t.deepEqual(readEntry(testEntries[4]), '444444444');
	t.deepEqual(readEntry(testEntries[5]), '555555555');
	t.deepEqual(readEntry(testEntries[6]), '666666666');
	t.deepEqual(readEntry(testEntries[7]), '777777777');
	t.deepEqual(readEntry(testEntries[8]), '888888888');
	t.deepEqual(readEntry(testEntries[9]), '999999999');
	t.deepEqual(readEntry(testEntries[10]), '123456789');

	t.end();
});
