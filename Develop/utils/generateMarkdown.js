function renderLicenseBadge(license) {
  if(license === "Unlicense"){
  return ``;
  }else{
    return `https://img.shields.io/badge/license-${license}-yellowgreen`;
    
  }
}
function renderLicenseLink(license) {
 switch(license){
 case "MIT":
   return `https://opensource.org/licenses/MIT`;
   case "Apache":
   return `https://opensource.org/licenses/Apache-2.0`;
   case "GNU":
   return `https://www.gnu.org/licenses/gpl-3.0`;
   case "Mozilla":
   return `https://opensource.org/licenses/MPL-2.0`;
   case "BSD":
   return `https://opensource.org/licenses/BSD-3-Clause`;
   default:
     return ``;
 }
}

function renderLicenseSection(license) {
   if(license === "Unlicense"){
     return `This is an unlicensed application`;
    }
    else {
      return `This application is covered under ${license} license.`;
    } 
 }  



function generateMarkdown(answers){
  return `
  <h1>${answers.title} </h1>

  [![badge](${renderLicenseBadge(answers.license)})](${renderLicenseLink(answers.license)})<br>


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
     ${renderLicenseSection(answers.license)} 
  ## Usage
    ${answers.usage}
  ## Contribution
    ${answers.contribution}
  ## Tests
    ${answers.tests}
  ## Questions
    ${answers.questions} <br>

    - [Github](https://github.com/${answers.username})  <br>
    - [Email](mailto:${answers.email})

   `
  ;
}
module.exports = generateMarkdown;
