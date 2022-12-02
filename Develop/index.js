// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMD = require('./utils/generateMarkdown');
const util = require('util');
const { default: Choices } = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of your project to be?',
        validate: userTitleInput => {
            if (userTitleInput) {
                return true;
            } else {
                console.log('you need to enter a title.')
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('you need to enter your github username.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('please enter your email.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your application is for',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('you need to enter a description.')
                return false;
            }
        }


    },
    {
        type: 'input',
        name: 'usage',
        message: 'how will a developer use this application?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('you need to enter a value to countinue.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does one use your application and what is required for it to work?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('you need to enter a value.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'are there any contributors with your project?',
        validate: contributorsInput => {
            if (contributorsInput) {
                return true;
            } else {
                console.log('if there are none, simply put n/a.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How does one test the application?',
        validate: userTitleInput => {
            if (userTitleInput) {
                return true;
            } else {
                console.log('please enter in how to test the application.')
                return false;
            }
        }   
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is used in your application',
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('please enter in a license')
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./exampleREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
