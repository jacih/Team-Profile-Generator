// declare req'd library: employee;
const Employee = require('./employee');

// class declaration for engineer;
class Engineer extends Employee {
  constructor (name, id, email, github) {
    // get employee constructor;
    super (name, id, email);
    // add input github to engineer object's github value;
    this.github = github;
  }

  // function to return github;
  getGithub() {
      return this.github;
  }

  // function to return role;
  getRole() {
      return 'Engineer';
  }
}

//export engineer;
module.exports = Engineer;