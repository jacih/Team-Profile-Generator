// declare required libraries : inquirer, employee, manager, intern, engineer, fs
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const renderHTML = require('./dist/renderHTML');

let employeeTeam = [];

const addEmployee = () => {
  return inquirer.prompt([
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
        valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
        if (valid) {
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
  .then(function({ name, id, email, role }) {
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
      },
      {
        type: 'list',
        message: 'Would you like to add another team members?',
        choices: [
            'yes',
            'no'
        ],
        name: 'addMember'
      }
    ])
    .then(function({ specInfo, addMember }) {
      let employee;
      if (role === 'Engineer') {
        employee = new Engineer(name, id, email, specInfo);
      } else if (role === 'Intern') {
        employee = new Intern(name, id, email, specInfo);
      } else {
        employee = new Manager(name, id, email, specInfo);
      }
      employeeTeam.push(employee);
      renderHTML(employeeTeam)
      .then(function() {
        if (addMember === 'yes') {
          addEmployee();
        }
      })
    })
  })
};

