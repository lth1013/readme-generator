// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines for your project.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Please provide license information for your project.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    }
    console.log("README.md has been generated.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
