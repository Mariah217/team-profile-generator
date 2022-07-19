const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require ('./src/generateHTML')
const employeeArray=[]

const managerQuestions = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the manager's employee ID?",
        name: 'managerID',
    },
    {
        type: 'input',
        message: "What is the manager's e-mail address?", 
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'officeNumber'
    }
]  

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'engineerID',
    },
    {
        type: 'input',
        message: "What is the engineer's e-mail?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'engineerGithub',
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'internID',
    },
    {
        type: 'input',
        message: "What is the intern's e-mail?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What school did the intern attend?",
        name: 'internSchool',
    },
]


//function to write index.html file
function init(){
    inquirer
    .prompt(managerQuestions, questions)
    .then(response => {
        const manager = new Manager(response.managerName, resonse.managerID, response.managerEmail)
        fs.writeFileSync("index.html", generateHTML(response))
        employeeArray.push(manager)
        confirmNext()
    })
}

//calling function
init();

//
function confirmNext(){
inquirer.prompt([{
    type: 'confirm',
    message: "Do you want to add another employee?",
    name: 'managerOfficeNumber'
}])
}