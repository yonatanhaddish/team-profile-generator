const fs= require('fs');
const inquirer= require('inquirer');

let engineer= [];
let inter= [];
let manager= [];

function promptManager() {
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

function promptEmployee() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select One!',
            choices: ['Engineer', 'Intern', 'Finish building team']
        }
    ])
    .then((answerList) => {
        if (answerList.role === 'Engineer') {

            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `What is your Engineer's name?`
                },
                {
                    type: 'input',
                    name: 'id',
                    message: `What is your Engineer's ID number?`
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `What is your Engineer's E-mail?`
                },
                {
                    type: 'input',
                    name: 'github',
                    message: `What is your Engineer's Github?`
                }
            ])
            .then((answer) => {
                let engineer= new Engineer(answer.name, answer.id, answer.email, answer.github);
                engineer.push(answer);
                promptEmployee();
            })
        }
        else if (answerList.role === 'Intern') {

            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `What is your Intern's name?`
                },
                {
                    type: 'input',
                    name: 'id',
                    message: `What is your Intern's ID number?`
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `What is your Intern's E-mail?`
                },
                {
                    type: 'input',
                    name: 'school',
                    message: `What is your Intern's school name?`
                }
            ])
            .then((answer) => {
                let inter= new Intern(answer.name, answer.id, answer.email, answer.school);
                inter.push(answer);
                promptEmployee();
            })
        }
    })
}

promptManager()
.then((answers) => {
    const manager= new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

    promptEmployee();
})



// .then(answer => {
//     manager.push(answer);
//     console.log(manager);

//     promptManager();
//  })