# bank-ocr
I am working on a solution to Coding Dojo's [Bank Optical Character Recognition challenge](https://github.com/gwpmad/bank-ocr) with a focus on utilising functional programming principles (my tool of choice is the [Ramda](http://ramdajs.com/docs/) library) and a test-driven approach.

The codebase is heavily unit tested, with a small number of acceptance tests for each use case. These acceptance tests document the intended behaviour of the program, forming part of a modular, loosely-coupled codebase that is simple to reason about.

To generate a document in the digit style described within the kata:
```
yarn test-data use case one [number of entries to write] [your manual entries]
```
Sub in your intended use case (one, two, three or four) for 'one', optionally specify the number of entries to write and add any specific nine digit account numbers, comma-delimited, that you'd like to include in file. Use the `-man` flag to display all options.

Test commands:
```
yarn test
yarn watch-test
yarn faucet _(for pretty test output)_
```

To come:
* A command line app for each use case
* Use cases three and four!
