const fs= require('fs');
const inquirer= require('inquirer');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your manager's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your manager's ID number?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your manager's E-mail?`
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is your manager's office number?`
        }
    ])
};

promptTeam();
