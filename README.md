# Bank Optical Character Recognition Challenge
I am working on a solution to Coding Dojo's [Bank Optical Character Recognition challenge](https://github.com/codingdojo-org/codingdojo.org/blob/master/content/kata/BankOCR.md) with a focus on utilising functional programming principles (my tool of choice is the [Ramda](http://ramdajs.com/docs/) library) and a test-driven approach.

The codebase is heavily unit tested, with a small number of acceptance tests for each use case. These acceptance tests document the intended behaviour of the program, forming part of a modular, loosely-coupled codebase that is simple to reason about.

To generate a document in the digit style described within the kata:
```
yarn test-data use case [number of entries to write] [your manual entries]
```
Sub in your intended use case (one, two, three or four) for 'one'; optionally specify the number of entries to write; and add any specific nine digit account numbers, comma-delimited, that you'd like to include in the file. For instance:
```
yarn test-data two 500 123456789,987654321
```
Use the `-man` flag to display all options.

Test commands:
```
yarn test
yarn watch-test
yarn faucet (for pretty test output)
```

To come:
* A command line app for each use case
* Use cases three and four!
