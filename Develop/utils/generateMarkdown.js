function renderLicenseBadge(license) {
  if(license === "Unlicense"){
  return ``;
  }else{
    return `![badge](https://img.shields.io/badge/license-${license}-yellowgreen)`;
    
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



function generateMarkdown(answers){
  return `
  <h1>${answers.title} </h1>

  ${renderLicenseBadge(answers.license)}<br>


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

    
    [Github](https://github.com/${answers.username})  <br>
    [Email](mailto:${answers.email})

   `
  ;
}
module.exports = generateMarkdown;
