# AdFenix Test Vorona

## Used tools:

 - **React** - since the project is small I decided to use React as framework here, because for such simple project using React will avoid a lot of boilerplate.
 - **MUI** - I used React material ui library to avoid excessive customization of components and bring great design.
 - **Eslint/Prettier** - code styling tools. Must have for all modern Javascript/Typescript projects. I used airbnb config as a base, because I like it and it is quite popular.
 - **formik+yup** - the most popular form tools for React.
 - **Cypress** - for tests I prefer to use Cypress both for E2E and Unit tests (instead of jest). I can discuss the pros and cons of Cypress for a long time, but I believe it is great and you can check how the tests looks like with it.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Application:

`npm start`  

To Visit App:

`localhost:3000/ideas` 

To Run Unit Tests in Cypress UI / Console:  

`npm cypress:unit`  
`npm cypress:cicd:unit`  

To Run E2E Tests in Cypress UI / Console:  

`npm cypress:e2e`  
`npm cypress:cicd:e2e`  
