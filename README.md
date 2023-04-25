<h1 align="center">
  Test automation for validating the frontend contains the expected values according to any data source
</h1>

<p align="left" style="font-size: 1.2rem; color: orange;"> Framework Structure </p>

### The relevant framework files are included in the following folders within the cypress folder.

1. _e2e_: Contains the test files that encompases the scenarios to be executed.
2. _fixtures and support_: Contain libs and methods tha support the tests, along with page object model.

<p align="left" style="font-size: 1.2rem; color: orange;"> Requirements to run the test </p>

### Open a terminal console and make sure you are in the root path of the project, and run the command below to install dependencies.
```sh
   npm i
```
<p align="left" style="font-size: 1.2rem; color: orange;"> How to run the test </p>

- To run all the tests in headed mode (opening the web browser), so that run one after the other, with no pause, run
   - `npm test`
   
- To run the test by opening the Cypress UI and handle the test run at will, run
   - `npm run cy:open`

- To run the test in headless mode (without opening the web browser), run
   - `npm run cy:headless`

For further information about the author, please consult
[Victor Caminero LinkedIn profile](https://www.linkedin.com/in/victor-caminero/)