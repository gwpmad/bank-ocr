const test = require('tape');
const entryReader = require('../../src/entryReader');
const testEntries = require(`../data/use-case-one/test-entries`);

test('Entry reader', (t) => {
	t.equal(entryReader(testEntries[0]), 000000000);
	t.equal(entryReader(testEntries[1]), 111111111);
	t.equal(entryReader(testEntries[2]), 222222222);
	t.equal(entryReader(testEntries[3]), 333333333);
	t.equal(entryReader(testEntries[4]), 444444444);
	t.equal(entryReader(testEntries[5]), 555555555);
	t.equal(entryReader(testEntries[6]), 666666666);
	t.equal(entryReader(testEntries[7]), 777777777);
	t.equal(entryReader(testEntries[8]), 888888888);
	t.equal(entryReader(testEntries[9]), 999999999);
	t.equal(entryReader(testEntries[10]), 123456789);

	t.end();
});
