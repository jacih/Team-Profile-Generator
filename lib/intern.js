// declare req'd library: employee;
const Employee = require('./employee');

// class declaration for intern;
class Intern extends Employee {
  constructor (name, id, email, school) {
    // get employee constructor;
    super (name, id, email);
    // add input school to intern object's school value;
    this.school = school;
  }

  // function to return school;
  getSchool() {
      return this.school;
  }

  // function to return role;
  getRole() {
      return 'Intern';
  }
}

//export Intern;
module.exports = Intern;