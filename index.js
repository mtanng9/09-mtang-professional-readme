// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
var genMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What would you like in the Description?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are your Installation Instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the Usage Information?',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are you Contribution Guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are your Test Instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select from the list of options for Licenses',
        choices: ['Academic Free License v3.0','MIT','Open Software License 3.0', 'Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email Address?',
    },
]
   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Here are your answers");
        console.log(JSON.stringify(answers, null, ' '))
    })
}

// Function call to initialize app
init();
