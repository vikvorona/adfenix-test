# AdFenix Test Vorona

## Used tools

 - **React** - since the project is small I decided to use React as framework here, because for such simple project using React will avoid a lot of boilerplate.
 - **MUI** - I used React material ui library to avoid excessive customization of components and bring great design.
 - **Eslint/Prettier** - code styling tools. Must have for all modern Javascript/Typescript projects. I used airbnb config as a base, because I like it and it is quite popular.
 - **formik+yup** - the most popular form tools for React.
 - **Cypress** - for tests I prefer to use Cypress both for E2E and Unit tests (instead of jest). I can discuss the pros and cons of Cypress for a long time, but I believe it is a great testing tool and you can check how the tests look like with it. This project I covered well with Unit tests to check that every part of the project works well and did one simple e2e test to test integration of components.
 - **source-map-explorer** - every good project should have analyzing tool to analyze bundles size. I prefer to use this one or **webpack-bundle-analyzer**.
 - **github-actions** - I used github actions to run unit and e2e tests for each push to repository. I consider this solution one of the best for solving the problem of checking the code before merging.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Application:

`npm start`  

To Visit App:

`localhost:3000` 

To Run Unit Tests in Cypress UI / Console:  

`npm run cypress:unit`  
`npm run cypress:cicd:unit`  

To Run E2E Tests in Cypress UI / Console (You should start application itself before running e2e tests):  

`npm run cypress:e2e`  
`npm run cypress:cicd:e2e`  
