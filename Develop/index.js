const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

//Questions to prompt the user
const questions = [
    {

    type: 'input',
    message: 'What is your full name?',
    name: 'Name',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },

    {
        type: 'input',
        message: 'What is the description of your project? Provide as many details as possible.',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What was your motivation and why?',
        name: 'Motivation',
    },
    {
        type: 'input',
        message: 'What problem or problems does it solve?',
        name: 'Problem',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'Learn',
    },
    {
        type: 'input',
        message: 'What references did you use and/or did you have any collaborators on this project?',
        name: 'Credits',
        default: '',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'How do you install this project?',
        name: 'Install',
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
        name: 'License',
        message: 'What license would you like to use?',
        choices:['MIT', 'Perl', 'PDDL']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub',

    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',

    },
];

//A function to write to the file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// A function to initialize app
function init() { 
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./completed/README.md", generateMarkdown({ ...responses }));

      });
}

// Function call to initialize app
init();
