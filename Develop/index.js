// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },

    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'Motivation',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'Why',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'Problem',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'Learn',
    },
    {

        type: 'input',
        message: 'What makes your project stand out?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What references did you use and/or collaborators on this project?',
        name: 'Credits',
    },
    {
        type: 'input',
        message: 'What are the usage information?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'Test',

    },
    {
        type: 'checkbox',
        name: 'Test',
        message: 'What license would you like to use?',
        choices:['MIT', 'Academic Free License v3.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'The Unlicense']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();