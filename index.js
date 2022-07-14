import inquirer from 'inquirer';
import fs from 'fs';

const generateHTML=(
    {
        managerName, managerID, managerEmail, managerNumber, add, engineerName, engineerID, engineerEmail, engineerGithub, internName, internID, internEmail, internSchool, 
    }
) =>
    

const input = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'managerID',
    },
    {
        type: 'input',
        message: "What is the team manager's e-mail address",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerNumber',
    },
    {
        type: 'list',
        message: 'Would you like to add an engineer or an intern?',
        choices: ['Engineer', 'Intern'],
        name: 'add',
    },
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
    },
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
inquirer
.prompt(input)
.then(response => {
    console.log(response)
    fs.writeFileSync("index.html", generateHTML(response))
})