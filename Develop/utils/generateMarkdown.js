// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== " "){
  return `https://img.shields.io/badge/license-${license}-yellowgreen.png`;
  }else{
    return " ";
  }
}
  /*for(var i = 0; i< options.length; i++)
  {
    if(license === options[i])
  }
  
  //  return;

  }*/


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers){
  return `
  <h1>${answers.title} </h1>
      ![badge](${renderLicenseBadge(answers.license)})
  ## Description
   ${answers.description}

  ## Table of Contents
   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contribution](#Contribution)
   - [Tests](#Tests)
   - [Questions](#questions)
   
  ## Installation
    ${answers.installation}

  ## Usage
    ${answers.usage}
  ## Contribution
    ${answers.contribution}
  ## Tests
    ${answers.tests}
  ## Questions
    ${answers.questions}



   `
  ;
}
module.exports = generateMarkdown;
