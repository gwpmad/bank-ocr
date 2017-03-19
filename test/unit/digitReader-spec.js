const digits = require('../../src/digits');
const digitReader = require('../../src/digitReader');
const test = require('tape');

test('Digit reader', (t) => {
	t.plan(11);

	digits.forEach(digit => {
		t.equal(digitReader(digit.drawing), digit.value, `recognises digit ${digit.value} correctly`);
	});

	t.equal(digitReader('| --| --'), undefined, 'returns undefined when no match is found')
});
