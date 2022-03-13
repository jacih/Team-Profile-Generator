const inquirer = require('inquirer');
const fs = require('fs');
const emailValid = require('email-validator');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHTML = require('./src/generateHTML');

let employeeTeam = [];

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Please select the team member\'s role',
      choices: [
          'Manager',
          'Engineer',
          'Intern',
      ],
      name: 'role',
    },
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
      type: 'input',
      message: `Please enter the team member\'s office number`,
      name: 'officeN',
      when: ({ role }) => {
        if (role === 'Manager') {
        return true;
        }
      }
    },
    {
      type: 'input',
      message: `Please enter the team member\'s github username`,
      name: 'github',
      when: ({ role }) => {
        if (role === 'Engineer') {
          return true;
        }
      }
    },
    {
      type: 'input',
      message: `Please enter the team member\'s school`,
      name: 'school',
      when: ({ role }) => {
        if (role === 'Intern') {
          return true;
        }
      }
    }
  ]).then((employeeData) => {
    switch (employeeData.role) {
      case 'Manager':
        let manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.officeN);
        employeeTeam.push(manager);
        break;
      case 'Engineer':
        let engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github);
        employeeTeam.push(engineer);
        break;
      case 'Intern':
        let intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school);
        employeeTeam.push(intern);
        break;
    }
    generateTeam();
  });
}

const generateTeam = () => {
  if (employeeTeam.length === 0) {
    addEmployee();
  } else {
    inquirer.prompt([
  {
    type:'confirm',
    message:'Would you like to add a team member?',
    default:'Yes',
    name: 'addMember',
  }
  ]).then((confirm) => {
    if (!confirm.addMember) {
      if (employeeTeam.length < 3) {
        console.log('You must have at least 3 members on your team.');
        addEmployee();
      } else if (isManaged(employeeTeam) === false) {
        // console.log(isManaged(employeeTeam));
        console.log('Your team must include a manager');
        addEmployee();
      } else {
        // console.log(`This is the employeeTeam array: ${employeeTeam}`); 
        generateProfile();
      }
    } else {
      addEmployee();
    }
  });
  }
}

const isManaged = (arrayOfObjs) => {
  let hasManager = false;
  for (let i = 0; i < arrayOfObjs.length; i++) {
    for (role in arrayOfObjs[i]) {
      if (arrayOfObjs[i].role === 'Manager') {
        hasManager = true;
        return hasManager;
      }
    }
  }
}
   
const renderHTML = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Success! You team\'s index.html has been rendered successfully and can be found in the dist folder.');
    }
  });
}
const generateProfile = () => {
  const data = generateHTML(employeeTeam);
  console.log(data);
  renderHTML('./dist/index.html', data);
}

const init = () => {
  generateTeam();
}

init();