// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let license_name = ""

  if(license == "Apache 2.0"){
    license_name = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  }
  else if(license == "Boost Software"){
    license_name = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
  }
  else if(license == "IBM Public"){
    license_name = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]"
  }
  else if(license == "The MIT"){
    license_name = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }

  return license_name
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let license_link = ""

  if(license == "Apache 2.0"){
    license_link = "(https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license == "Boost Software"){
    license_link = "(https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if(license == "IBM Public"){
    license_link = "(https://opensource.org/licenses/IPL-1.0)"
  }
  else if(license == "The MIT"){
    license_link = "(https://opensource.org/licenses/MIT)"
  }

  return license_link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let license_section = ""

  if(license == "Apache 2.0"){
    license_section = "This project is licensed under the Apache 2.0 license."

  }
  else if(license == "Boost Software"){
    license_section = "This project is licensed under the Boost Software license."
  }
  else if(license == "IBM Public"){
    license_section = "This project is licensed under the IBM Public license."
  }
  else if(license == "The MIT"){
    license_section = "This project is licensed under the The MIT license."
  }
  else
  {
    license_section = "This project is not licensed."
  }

  return license_section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
---
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
To install necessary dependencies, run the following command:

    ${data.installation}


## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:

    ${data.test}

## Questions
If you have any questions about this project, please open an issue or contact me at ${data.email}. You can find more of my work at [github.com/${data.github}](https://github.com/${data.github})!


`;
}

module.exports = generateMarkdown;
