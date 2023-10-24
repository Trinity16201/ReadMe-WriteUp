//Render License Badge
function renderLicenseBadge(License) {
  if (License !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${License}-purple.svg)`;
  }
  return "";
}
//Render License Link
function renderLicenseLink(License) {
  if (License !== "none") {
    return `[License](#license)`
  }
  return "";
}

//Render License
function renderLicenseSection(License) {
  if (License !== "none") {
    return `
    Licensed under ${License}`;
  }
  return "";
}
//Function to create markdown file
function generateMarkdown(data) {
  return `# Title: ${data.Title}
  by ${data.Name}
  ${renderLicenseBadge(data.License)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Credits](#additional-credits)
* [Usage](#usage-information)
* [Test instructions](#test-instructions)
* [Questions](#contact)

### Description
${data.Description}\n
${data.Motivation}\n
${data.Problem}\n
${data.Learn}\n

## Installation\n
${data.Install}

### Additional Credits\n
${data.Credits}

### Usage Information\n
${data.Usage}

### Test Instructions
${data.Test}

### Contribution guidelines
${data.Contribution}

### License
${renderLicenseLink()} 

${renderLicenseSection(data.License)}

### Contact
Github: (https://github.com/${data.GitHub}/)\n

Email: ${data.Email}
`;

}

module.exports = generateMarkdown;
