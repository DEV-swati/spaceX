This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Sapient Space-X Launch Assignmnet

## Demo

To see the demo please click [here](https://vigilant-visvesvaraya-89f8bf.netlify.app/)

## Steps to Execute

In the project directory, please run to run this project:

#### `npm install`

#### `npm start`

## Architecture

Project follows the MVC architecture where bussiness logic and presentaion code is separated by the folders. Please see the following stack of files/folders

    .
    ├── build
    ├── src
        ├── assests
            └── images
        ├── constants
            └── filterConstants.js
        ├── components
            ├── Header
            ├── Footer
            ├── Filter
            └── Card
        ├── containers
            ├── FilterCont
            └── CardCont
        ├── modules
            ├── action.js
            └── reducer.js
        ├── view
            └── Home
       └── indes.js
    ├── public
    └── README.md

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Coding Practices

1. Used react hooks: it holds abstract logics and reduced syntax
2. Every component can be reused in different views
3. Used CSS in Javascript (otherwise will prefer to use SCSS)
4. Index.js file used as the default file of the particular folder
5. Take card of naming conventions
6. Use ES-Lint to maintain the code quality

## Screenshot of Lighthouse Report

![Screenshot of Lighthouse Report](/src/assets/images/Capture.PNG)
