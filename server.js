const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const emailValid = require('email-validator');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHTML = require('./src/generateHTML');

let employeeTeam = [];

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Please input your team member\'s name',
      name: 'name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name');
          return false;
        }
      }
    },
    {
      type: 'input',
      message: 'Please enter the team member\'s id number',
      name: 'id',
      validate: idInput => {
        if (isNaN(idInput)) {
          console.log('Please enter a number');
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      message: 'Please enter the team member\'s email address',
      name: 'email',
      validate: emailInput => {
        if (emailValid.validate(emailInput)) {
          return true;
        } else {
          console.log('Please enter an email address');
          return false;
        }
      }
    },
    {
        type: 'list',
        message: 'Please select the team member\'s role',
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ],
        name: 'role',
      }
  ])
  .then(function({ role }) {
    let specInfo = '';
    if (role === 'Engineer') {
      specInfo = 'Github username';
    } else if (role === 'Intern') {
        specInfo = 'school name';
    } else {
        specInfo = 'office number'
    }
    inquirer.prompt([
      {
        type: 'input',
        message: `Please enter the team member\'s ${specInfo}`,
        name: 'specInfo',
      }
    ]).then(employeeData => {

      let { name, id, email, specInfo } = employeeData;
      let employee;

      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, specInfo);
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, specInfo);
      } else {
        employee = new Manager(name, id, email, specInfo);
      }
      employeeTeam.push(employee);
      generateTeam();
    });
  });
}

function generateTeam() {
  inquirer.prompt([
    {
      type:'confirm',
      message:'Would you like to add a team member?',
      default:'Yes',
      name: 'addMember',
    }
  ]).then((confirm) => {
    if (confirm.addMember) {
      addEmployee();
    } else if (!confirm.addMember) {
      if (employeeTeam.length < 3) {
        console.log('You must have at least 3 members on your team!')
        addEmployee();
      } else {
        generateProfile();
      }
    }
  });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Success! You team's index.html has been rendered successfully and can be found in the dist folder.");
    }
  });
}

function generateProfile() {
  const data = generateHTML(employeeTeam);
  console.log(data);
  writeToFile('./dist/index.html', data);
}

generateTeam();
