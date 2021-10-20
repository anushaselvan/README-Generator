function renderLicenseBadge(license) {
  if(license !== " "){
  return `https://img.shields.io/badge/license-${license}-yellowgreen`;

  }else{
    return " ";
  }
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
/*function renderLicenseLink(license) {
  switch(license)
  case(MIT)
  {
    return `https://img.shields.io/badge/license-${license}-yellowgreen`;
  
    }else{
      return " ";
    }
  }
}*/

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

function generateMarkdown(answers){
  return `
  <h1>${answers.title} </h1>

  ![badge](${renderLicenseBadge(answers.license)})<br>


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
  ## License

  ## Usage
    ${answers.usage}
  ## Contribution
    ${answers.contribution}
  ## Tests
    ${answers.tests}
  ## Questions
    ${answers.questions}<br>
    Find me on Github: [${answers.username}](https://github.com/${answers.username})<br>
    Contact me via [email](${answers.email})<br>

   `
  ;
}
module.exports = generateMarkdown;
