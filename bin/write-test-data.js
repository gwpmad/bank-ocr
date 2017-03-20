const digitDrawings = require('../src/digitDrawings');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));
const { compose, map, join, times, split, range, forEach } = require('ramda');

const DIGITS_PER_ENTRY = 9;
const DEST_FILENAME = 'test-document.txt';

const useCase = args._[0];
const number = args._[1];
const writePath = `${__dirname}/../test/data/use-case-${useCase}/${DEST_FILENAME}`;

const getRandomNumber = () => Math.floor(Math.random() * 10);

const manual = 'Arguments: use case (one, two, three or four) [number of lines to write]';

const writeNEntries = (n = 500) => {
	// how could i do this better
	const createAccountNumber = () => Array.from({ length: 9 }, getRandomNumber);
	const logAccountNumber = (accountNumber) => process.stdout.write(`${accountNumber}\n`) && accountNumber;
	const generateRandomEntry = compose(accountNumberToEntry, logAccountNumber, join(''), createAccountNumber);

	const entries = compose(join('\n'), map(generateRandomEntry))(range(0, n));
	fs.writeFile(writePath, entries, (err) => {
		if (err) {
			console.log(`Write failed: ${err}`)
		} else {
			console.log('Writing is now finished')
		}
	});
};

const accountNumberToEntry = (accountNumber) => {
	const getDigit = number => digitDrawings[number].drawing;
	const splitDigitIntoLines = digit => digit.split('\n');
	const getDigitLineByNumber = i => digit => digit[i]
	const arrayForEachLineOfEntry = digitLines => range(0, 3).map(i =>
		digitLines.map(getDigitLineByNumber(i)));
	const joinEntryLineArray = chars => join('', chars);
	const addBlankLine = lines => lines.concat(' '.repeat(DIGITS_PER_ENTRY * 3));

	return compose(
		join('\n'),
		addBlankLine,
		map(joinEntryLineArray),
		arrayForEachLineOfEntry,
		map(splitDigitIntoLines),
		map(getDigit),
		split('')
	)(accountNumber);
};

const scripts = {
	one()	{
		writeNEntries(number);
	}
}

if (args.man || args.m) {
	console.log(manual);
} else if (scripts[useCase]) {
	scripts[useCase]();
} else {
	throw new Error(`Please provide a use case argument.\n${manual}`);
}
