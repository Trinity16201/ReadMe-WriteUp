// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    return `![Github license](https://img.shields.io/badge/license-$(license)=blueyellow.svg)`;
  }
}
// return "";


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `[License](#license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `##License
    
    Licensed under ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.Name}
  ${renderLicenseBadge(data.license)}
##Table of Contents
* [Description](#Description)
* [Motivation](#Motivation)
* [Reasons for the project](#Reasons)
* [Problem solved](#Problem-solved)
* [Learnings](#Learnings)
* [Credits](#Credits)
* [Usage](#Usage)
*[Test instructions](#Test-Instructions)
*[Questions](#Contact-Me)

##Description
${data.Description}
##Motivation
${data.Motivation}
##Reasons
${data.Why}
##Problem-solved
${data.Problem}
##Learnings
${data.Learn}
##Additional Credits
${data.Credits}
##Usage Information
${data.Usage}
##Test-instructions
${data.Test}
##Contribution guidelines
${data.Contribution}
##License
${data.license}
##Contact me ${data.name}with addtional questions at: 
${data.GitHub}(https://github.com/${data.GitHub}/)
${data.Email}
`;
}

module.exports = generateMarkdown;
