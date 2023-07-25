// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ("MIT") {
    return "https://img.shields.io/badge/license-MIT-blue.svg";
  }
  if ("Apache") {
    return "https://img.shields.io/badge/license-Apache-blue.svg";
  }
  if ("GPL") {
    return "https://img.shields.io/badge/license-GPL-blue.svg";
  }
  if ("BSD") {
    return "https://img.shields.io/badge/license-BSD-blue.svg";
  }
  if ("None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ("MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  if ("Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  if ("GPL") {
    return "https://opensource.org/licenses/gpl-license";
  }
  if ("BSD") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
  if ("None") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ("MIT") {
    return "This project is licensed under the MIT license.";
  }
  if ("Apache") {
    return "This project is licensed under the Apache license.";
  }
  if ("GPL") {
    return "This project is licensed under the GPL license.";
  }
  if ("BSD") {
    return "This project is licensed under the BSD license.";
  }
  if ("None") {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.test}

  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Questions
  
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
