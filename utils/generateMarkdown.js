// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Academic Free License v3.0':
      return `[![License: AFL 3.0](https://img.shields.io/badge/License-afl_3.0-brightgreen.svg)](https://spdx.org/licenses/AFL-3.0.html)`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)`;
    case 'Open Software License 3.0':
      return `![License: OSL 3.0](https://img.shields.io/badge/License-osl_3.0-brightgreen.svg)](https://spdx.org/licenses/OSL-3.0.html)`;
    case 'Mozilla Public License 2.0':
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    default:
      return ""
  }
}

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
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)
- [How To Contribute](#how-to-contribute)
- [Tests](#tests)


## Installation

${data.install}

## Usage

${data.usage}

## Questions

[${data.username}](https://github.com/${data.username})

Please email me at ${data.email} for any addiional question that are not covered my this README

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
