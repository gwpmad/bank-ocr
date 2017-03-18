const digits = require('../../src/digits');
const digitReader = require('../../src/digitReader');
const test = require('tape');

test('Digit reader', (t) => {
	t.plan(10);
	digits.forEach(digit => {
		t.equal(digitReader(digit.string), digit.value);
	});
})