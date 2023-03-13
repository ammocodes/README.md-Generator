const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("/utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your repository title.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your repository. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your repository.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please list installation instructions.(Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue!');
                return false;
            }
        }
    },
];

// function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};
// function to initialize program

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};
// function call to initialize program
init();
