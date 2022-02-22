// declare req'd library: employee;
const Employee = require('./employee');

// class declaration for Manager;
class Manager extends Employee {
  constructor (name, id, email, officeN) {
    // get employee constructor;
    super (name, id, email);
    // add input to manager object's officeN al;
    this.officeN = officeN;
  }

  // fuction to return office number;
  getOfficeN() {
    return this.officeN;
  }

  // function to return role;
  getRole() {
      return 'Manager';
  }
}

//export engineer;
module.exports = Manager;