const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

const questions = [
    {
        type: "input",
        message: "Enter your name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the employee's ID",
        name: "employeeIDAnswer",
    },
    {
        type: "input",
        message: "Enter the employee's email",
        name: "employeeEmailAnswer",
        validate: function(value) {
            var pass = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (pass) {
                return true;
            }
            return "Please enter a valid email address"
        },
    },
    {
        type: "rawlist",
        message: "Select the employee's role",
        choices: ["manager", "engineer", "intern"],
        name: "role",
    },
    {
        type: "input",
        message: "Please enter the office number",
        when: function( answers ) {
            return answers.role === "manager";
        },
        name: "officeNumberAnswer",
    },
    {
        type: "input",
        message: "Please enter the gitHub username",
        when: function( answers ) {
            return answers.role === "engineer";
        },
        name: "gitHubAnswer",
    },
    {
        type: "input",
        message: "Please enter the intern's school",
        when: function( answers ) {
            return answers.role === "intern";
        },
        name: "internSchool",
    },

];

// console.log(questions)

function createTeamMember () {
inquirer
  .prompt(questions)
  .then(function (answers) {


    // take the answer data and then create a new Employee based on the role answer
    switch(answers.role) {
        case "manager":
            const manager = new Manager(answers.name, parseInt(answers.employeeIDAnswer), answers.employeeEmailAnswer, answers.officeNumberAnswer);
           teamMembers.push(manager);
           break

        case "engineer":
            const engineer = new Engineer(answers.name, parseInt(answers.employeeIDAnswer), answers.employeeEmailAnswer, answers.gitHubAnswer);
            teamMembers.push(engineer);
            break

        case "intern":
            const intern = new Intern(answers.name, parseInt(answers.employeeIDAnswer), answers.employeeEmailAnswer, answers.internSchool);
            teamMembers.push(intern);
            break
    }

    addAnother();

    // need to loop through the inquirer prompt to add new users

});

function addAnother () {
    inquirer
    .prompt([
        {
            type: "confirm",
            message: "Do you wish to create another team member?",
            name: "addMemberConfirm",
        }
    ])
    .then (function (answers) {
        if (answers.addMemberConfirm) {
            createTeamMember();
        } else {
            createHTML(teamMembers);
        }
    })
}

function createHTML (teamMembers) {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFile(outputPath, render(teamMembers), function (err) {
        if (err) throw err;
        console.log("File created successfully");
    })
}


//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }

}


createTeamMember();

