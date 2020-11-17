const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");

var employees = []
async function create() {
    var teamsize
    
   
    await inquirer.prompt(
        {
            type: 'number',
            message: 'How many people are on your team?',
            name: 'people'
        }
    )

    .then((answers) => {
        teamsize = answers.people
        console.log(teamsize)
    })

    for(i=0; i < teamsize; i++){
        var name
        var phone
        var email
        var position

        await inquirer.prompt([
            {
                type:"input",
                message: `What's this employee's name?`,
                name: 'name'
            },
            {
                type: 'input',
                message: `What's this employee's phone number?`,
                name: 'phone'
            },
            {
                type: 'input',
                message: `What's this employee's email?`,
                name: 'email'
            },
            {
                type: 'list',
                message: `What's this employee's position?`,
                choices: ['Manager', 'Intern', 'Engineer'],
                name: 'position'
            }
        ])
        .then((answers) => {
            name = answers.name
            phone = answers.phone
            email = answers.email
            position = answers.position
        })


        switch(position){
            case 'Manager':
                await inquirer.prompt([
                    {
                        type: 'input',
                        message: 'How many people does your manager supervise?',
                        name: 'numberofsuper'
                    }
                ])
                .then((answers) => {
                    const manager = new Manager(name, phone, email, answers.numberofsuper)
                    employees.push(manager)   
                    render(employees)
                              
                })

                break;
            case "Intern":
                await inquirer.prompt([
                    {
                        type: 'input',
                        message: "What University did they go to?",
                        name: "uni"
                    }
                ])
                .then((answers) => {
                    const intern = new Intern(name, phone, email, answers.uni)
                    
                    employees.push(intern)
                    render(employees)
                })
                break;
                case "Engineer":
                    await inquirer.prompt([
                        {
                            type: 'input',
                            message: "Whats their github?",
                            name: "github"
                        }
                    ])
                    .then((answers) => {
                        const engineer = new Engineer(name, phone, email, answers.github)
                       employees.push(engineer)
                       render(employees)
                    })
                    break;
        }
        
    }

   
   

    
    console.log(employees)
    
}
module.exports = employees
create()

