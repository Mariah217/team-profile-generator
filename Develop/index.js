const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require ('./src/generateHTML')
const employeeArray=[] //array to hold all employee constructors, will use to generate cards

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
        name: 'managerOfficeNumber'
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


//function to initiate manager questions
function init(){
    inquirer
    .prompt(managerQuestions)
    .then(response => { 
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber)
        employeeArray.push(manager)
        confirmNext()
    })
}

//calling function
init();

//function to add another employee
function confirmNext(){
inquirer.prompt([{
    type: 'confirm',
    message: "Would you like to add another employee?",
    name: 'addMore'
}])
.then(response =>{
    if(addMore===true){
        addEmployee()
    } else {
        createHTML()
    }
})
}

//function to add another employee
function addEmployee(){
    inquirer.prompt([{
        type: "list",
        message: "Would you like to add an engineer or an intern?",
        choices: ["Engineer", "Intern"],
        name: "selection"
    }])
    .then(response=>{
        if(response.selection==="Engineer"){
            addEngineer();
        } else {
            addIntern();
        }
    })
}

function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then(response=>{
        const engineer = new Engineer (response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub)
        employeeArray.push(engineer)
        confirmNext();
    })
}

function addIntern(){
    inquirer.prompt(internQuestions)
    .then(response=>{
        const intern = new Intern (response.internName, response.internID, response.internEmail, response.internSchool)
        employeeArray.push(intern)
        confirmNext();
    })
}

//function to create the html if no other employee is selected
function createHTML(){

}


// fs.writeFileSync("index.html", generateHTML(response))