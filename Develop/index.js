// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
//const util = require('util');
//const writeFile = util.promisify(fs.writeFile);

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
    ]);
};
   
// TODO: Create a function to initialize app
/*async function init() {
    try{
    console.log('Enter the following details to create a README.md file for your project');
    const answers = await questions();
    const generateFile = generateMarkdown(answers);
    console.log(generateFile);
    await writeFileMd('README.md', JSON.stringify(generateFile));
    console.log('Successfully created README.md');
    }
    catch(err) {
        console.error(err);
}
}*/
function init(){
    questions()
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md")
        );
    });
}

// Function call to initialize app
init();
