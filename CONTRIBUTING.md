## Submitting Pull Requests

**Please follow these basic steps to simplify pull request reviews - if you don't you'll probably just be asked to anyway.**

* Please rebase your branch against the current master
* Please ensure that the test suite passes **and** that code is lint free before submitting a PR by running:
 * ```npm test```
* If you've added new functionality, **please** include tests which validate its behaviour
* Make reference to possible [issues](https://github.com/preboot/angular2-library-seed/issues) on PR comment

## Submitting bug reports

* Please detail the affected browser(s) and operating system(s)
* Please be sure to state which version of node **and** npm you're using

## How to get setup and run the code as well as test

**Note** To run the demo, you must have node v4.x.x or higher and npm 3.x.x.

```bash
git clone https://github.com/preboot/angular2-library-seed.git
cd angular2-library-seed
npm install   # or `npm run reinstall` if you get an error
npm start     # start with --env dev
```

# Running tests

```bash
npm test
```
