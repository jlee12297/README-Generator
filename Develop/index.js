// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(`./utils/generateMarkdown.js`)

// TODO: Create an array of questions for user input
const questions = [
    {
        message:"What is the title of your project?",
        type:"input",
        name:"title"
    },
    {
        message:"Please provide a description of your project: ",
        type:"input",
        name:"description"
    },
    {
        message:"Please provide installation instructions (you may just type a command) for your project: ",
        type:"input",
        name:"installation"
    },
    {
        message:"Please provide information on usage of your project: ",
        type:"input",
        name:"usage"
    },
    {
        message:"Which license will this project be created under?",
        choices: ['N/A', 'Apache 2.0', 'Boost Software', 'IBM Public', 'The MIT'],
        type:"list",
        name:"license"
    },
    {
        message:"Please provide the contribution guidelines you would like followed for your project: ",
        type:"input",
        name:"contributing"
    },
    {
        message:"Please provide explicit instruction on how to run all necessary tests (you may just type a command) for your project: ",
        type:"input",
        name:"test"
    },
    {
        message:"Please provide your email: ",
        type:"input",
        name:"email"
    },
    {
        message:"Please provide your GitHub Username: ",
        type:"input",
        name:"github"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err)
        }
    })
}
   
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=>{
        writeToFile('test.md', generateMarkdown(data))
    })



    
}
   
// Function call to initialize app
init();
