const numberValidator = require('../../src/numberValidator');
const test = require('tape');

const validAccountNumber = '345882865';
const invalidAccountNumber = '575326790';
const tooShortAccountNumber = '57532679';
const tooLongAccountNumber = '5753267901';

test('Account number validator', (t) => {
	t.plan(4);
	t.equal(numberValidator(validAccountNumber), true, 'returns true for a valid account number');
	t.equal(numberValidator(invalidAccountNumber), false, 'returns false for an invalid account number');
	t.equal(numberValidator(tooShortAccountNumber), false, 'returns false for an account number that is too short');
	t.equal(numberValidator(tooLongAccountNumber), false, 'returns false for an account number that is too long');
});
