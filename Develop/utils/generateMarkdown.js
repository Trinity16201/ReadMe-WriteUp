function renderLicenseBadge(License) {
  if (License !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${License}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(License) {
  if (License !== "none") {
    return `[License](#license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License !== "none") {
    return `
    Licensed under ${License}`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# Title: ${data.Title}
  by ${data.Name}
  ${renderLicenseBadge(data.License)}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Credits](#Credits)
* [Usage](#Usage)
* [Test instructions](#Test-Instructions)
* [Questions](##Contact-Me)

## Description
${data.Description}\n
${data.Motivation}\n
${data.Why}\n
${data.Problem}\n
${data.Learn}\n

## Installation\n
${data.Install}

### Additional Credits\n
${data.Credits}

### Usage Information\n
${data.Usage}

### Test-instructions
${data.Test}

### Contribution guidelines
${data.Contribution}

## License
${renderLicenseLink()} 

${renderLicenseSection()}

## Contact-me: 
(https://github.com/${data.GitHub}/)
${data.Email}
`;

}

module.exports = generateMarkdown;
