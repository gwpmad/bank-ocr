const digits = require('../src/digits');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));
const { compose, map, join, times, split } = require('ramda');

const DIGITS_PER_ENTRY = 9;

const useCase = args._[0];
const number = args._[1];
const writePath = `${__dirname}/../test/data/use-case-${useCase}/test-data.txt`;

const getRandomNumber = () => Math.floor(Math.random() * 10);

const manual = 'Arguments: use case (one, two, three, four) [number of lines to write]';

const writeNEntries = (n = 500) => {
	const accountNumberList = [];
	const createAccountNumber = () => {
		const accountNumber = Array.from({ length: 9 }, getRandomNumber).join('');
		accountNumberList.push(accountNumber);
		return accountNumber;
	};
	const writeStream = fs.createWriteStream(writePath); // why not async
	writeStream.on('error', (err) => console.log(`Write failed: ${err}`));
	const writeSingleEntry = compose(writeStream.write.bind(writeStream),createEntry, createAccountNumber);
	times(writeSingleEntry, n);
	writeStream.end(() => console.log(`Writing is now finished, account numbers:\n${accountNumberList.join('\n')}`));
};

const createEntry = (accountNumber) => {
	const getDrawing = num => digits[num].drawing;
	const splitDrawingIntoLines = drawing => drawing.split('\n');
	const createEntryLines = drawings => [0, 1, 2].map(i =>
		drawings.map(drawing => drawing[i]).join('') + '\n');
	const addBlankLine = lines => lines.concat(' '.repeat(DIGITS_PER_ENTRY * 3) + '\n');

	return compose(
		join(''),
		addBlankLine,
		createEntryLines,
		map(splitDrawingIntoLines),
		map(getDrawing),
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
