const test = require('tape');
const bankOcr = require('../../../src/bankOcr');
const data = require(`../../data/use-case-one/entries`);

test.skip('BankOCR use case one', (t) => {
	t.equal(bankOcr(data.useCaseOne[0]), 000000000);
	t.equal(bankOcr(data.useCaseOne[1]), 111111111);
	t.equal(bankOcr(data.useCaseOne[2]), 222222222);
	t.equal(bankOcr(data.useCaseOne[3]), 333333333);
	t.equal(bankOcr(data.useCaseOne[4]), 444444444);
	t.equal(bankOcr(data.useCaseOne[5]), 555555555);
	t.equal(bankOcr(data.useCaseOne[6]), 666666666);
	t.equal(bankOcr(data.useCaseOne[7]), 777777777);
	t.equal(bankOcr(data.useCaseOne[8]), 888888888);
	t.equal(bankOcr(data.useCaseOne[9]), 999999999);
	t.equal(bankOcr(data.useCaseOne[10]), 123456789);

	t.end();
});
