// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function questions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Project Title:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage:',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Credits:',
        },
        {
            type: 'input',
            name: 'license',
            message: 'License:',
        },
        {
            type: 'input',
            name: 'features',
            message: 'Features:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How to Contribute:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests:',
        },
    ]);
};

   
// TODO: Create a function to initialize app
function init() {
    console.log('Enter the following details to create a README.md file for your project');
    questions()

    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully created README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
