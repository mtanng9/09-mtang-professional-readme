// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Academic Free License v3.0':
      return `[${license}](https://choosealicense.com/licenses/afl-3.0/)`;
    case 'MIT':
      return `[${license}](https://choosealicense.com/licenses/mit/)`;
    case 'Open Software License 3.0':
      return `[${license}](https://choosealicense.com/licenses/osl-3.0/)`;
    case 'Mozilla Public License 2.0':
      return `[${license}](https://choosealicense.com/licenses/mpl-2.0/)`;
    default:
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return ""
  } else {
    return `Licensed under the ${renderLicenseLink(license)} license` 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.install}

## Usage

${data.usage}

## Credits

${data.username}

${data.email}

## License

${renderLicenseSection(data.license)}  
---

## How to Contribute

${data.guidelines}

## Tests

${data.test}
`;
}

module.exports = generateMarkdown;
