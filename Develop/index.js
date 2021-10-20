const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
            type: 'list',
            name: 'license',
            message: 'License:',
            choices: ['MIT', 'Apache', 'GNU', 'Mozilla','BSD', 'Unlicense'],
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
        {
            type: 'input',
            name: 'questions',
            message: 'Questions:',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Github username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email:',
        },
    ]);
};
   

function init(){
    questions()
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md")
        );
    });
}

init();
