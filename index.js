const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site')

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};

function Prompt() {
    
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message:"What is the employee's title?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'input',
            name: 'employee',
            message: "What is the Employee's name?"
        },
        {
            type:'input',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                    .prompt([{
                        type:'input',
                        name: 'officeNumber',
                        message:"What is the Manager's office number?"
                    },
                    {
                        type:'confirm',
                        name:'addMore',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({officeNumber, addMore}) => {
                        manager.push(new Manager(employee, id, email, officeNumber))
                        // console.log(employeeArr)
                        if (addMore) {
                            return Prompt();
                        }
                    })
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        type: 'input',
                        name: 'github',
                        message: "What is the Engineer's Github username?"
                    },
                    {
                        type:'confirm',
                        name:'addMore',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({github, addMore}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        // console.log(employeeArr)
                        if (addMore) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Intern') {
                 return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "What is the Intern's school?"
                    },
                    {
                        type:'confirm',
                        name:'addMore',
                        message: "What you like to add another employee?",
                        default: false
                    }])
                    .then(({school, addMore}) => {
                        intern.push(new Intern(employee, id, email, school))
                        // console.log(employeeArr)
                        if (addMore) {
                            return Prompt();
                        }
                    })
            }
        })
};



Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })