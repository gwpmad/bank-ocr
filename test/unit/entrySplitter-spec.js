const test = require('tape');
const entrySplitter = require('../../src/entrySplitter');
const testEntries = require(`../data/use-case-one/test-entries`);
const digitDrawings = require('../../src/digitDrawings');

const digitDrawingSequence = (i) => Array(9).fill(digitDrawings[i].drawing);

test('Entry splitter', (t) => {
	t.deepEqual(entrySplitter(testEntries[0]), digitDrawingSequence(0),
		'should split an entry string into an array of its constituent digit drawings');
	t.deepEqual(entrySplitter(testEntries[1]), digitDrawingSequence(1));
	t.deepEqual(entrySplitter(testEntries[2]), digitDrawingSequence(2));
	t.deepEqual(entrySplitter(testEntries[3]), digitDrawingSequence(3));
	t.deepEqual(entrySplitter(testEntries[4]), digitDrawingSequence(4));
	t.deepEqual(entrySplitter(testEntries[5]), digitDrawingSequence(5));
	t.deepEqual(entrySplitter(testEntries[6]), digitDrawingSequence(6));
	t.deepEqual(entrySplitter(testEntries[7]), digitDrawingSequence(7));
	t.deepEqual(entrySplitter(testEntries[8]), digitDrawingSequence(8));
	t.deepEqual(entrySplitter(testEntries[9]), digitDrawingSequence(9));

	const multiDigitSequence = '123456789'.split('').map((i) => digitDrawings[i].drawing);
	t.deepEqual(entrySplitter(testEntries[10]), multiDigitSequence);

	t.end();
});
