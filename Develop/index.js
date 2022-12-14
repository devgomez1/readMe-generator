
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of your project to be?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your application is for',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'how will a developer use this application?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How does one use your application and what is required for it to work?',
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'are there any contributors with your project?',
    },

    {
        type: 'input',
        name: 'testing',
        message: 'How does one test the application?',
    },

    {
        type: 'input',
        name: 'license',
        message: 'What license is used in your application',
    },
];

function generated(fileName, data) {
    fs.writeFile(fileName, data, function() {
        console.log("Generated ReadME")
    })


}


function init() {
 inquirer.prompt(questions)
    .then(function(data) {
        generated("README.MD", generateMarkdown(data))
    })
}


init()