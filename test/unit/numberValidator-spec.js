const numberValidator = require('../../src/numberValidator');
const test = require('tape');

const validAccountNumber = { value: '345882865' };
const invalidAccountNumber = { value: '575326790' };

test('Account number validator', (t) => {
	t.plan(2);
	t.equal(numberValidator(validAccountNumber), true, 'returns true for a valid account number');
	t.equal(numberValidator(invalidAccountNumber), false, 'returns false for an invalid account number');
});
