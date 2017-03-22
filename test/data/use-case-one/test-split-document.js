const stripOpeningNewline = require('../../helpers/stripOpeningNewline');
const splitDocument = [
	`
 _  _  _  _  _     _  _  _ 
|_ |_ |_   | _||_| _|| |  |
 _||_||_|  | _|  ||_ |_|  |
                           `,
`
 _  _  _  _     _  _     _ 
  | _| _||_ |_|  ||_|  ||_|
  ||_ |_  _|  |  ||_|  ||_|
                           `,
`
 _  _  _  _  _  _        _ 
|_||_||_  _||_ |_|  |  ||_ 
|_| _||_| _||_||_|  |  | _|
                           `
];

module.exports = splitDocument.map(stripOpeningNewline);