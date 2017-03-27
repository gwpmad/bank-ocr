const digitDrawings = require('../../src/digitDrawings');
const digitDrawingReader = require('../../src/digitDrawingReader');
const test = require('tape');

test('Digit reader', (t) => {
	t.plan(11);

	digitDrawings.forEach(digitDrawing => {
		t.equal(digitDrawingReader(digitDrawing.drawing), digitDrawing.value, `recognises digit ${digitDrawing.value} correctly`);
	});

	t.equal(digitDrawingReader('| --| --'), '?', 'returns ? when no match is found')
});
