const readEntry = require('../../src/readEntry');
const testEntries = require(`../data/use-case-one/test-entries`);
const test = require('tape');

test('Read a single entry', (t) => {
	t.plan(14);

	t.deepEqual(readEntry(testEntries[0]).value, '000000000', 'correctly reads the value of an entry');
	t.deepEqual(readEntry(testEntries[1]).value, '111111111');
	t.deepEqual(readEntry(testEntries[2]).value, '222222222');
	t.deepEqual(readEntry(testEntries[3]).value, '333333333');
	t.deepEqual(readEntry(testEntries[4]).value, '444444444');
	t.deepEqual(readEntry(testEntries[5]).value, '555555555');
	t.deepEqual(readEntry(testEntries[6]).value, '666666666');
	t.deepEqual(readEntry(testEntries[7]).value, '777777777');
	t.deepEqual(readEntry(testEntries[8]).value, '888888888');
	t.deepEqual(readEntry(testEntries[9]).value, '999999999');
	t.deepEqual(readEntry(testEntries[10]).value, '123456789');
	t.deepEqual(readEntry(testEntries[10]).illegible, false, 'sets illegible to false when there are no illegible characters');
	

	t.deepEqual(readEntry(testEntries[11]).value, '12345678?', 'assigns ? to illegible characters');
	t.deepEqual(readEntry(testEntries[11]).illegible, true, 'sets illegible to true when there is an illegible character');
});
