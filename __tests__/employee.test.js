//declare employee library req'd;
const Employee = require('../lib/employee');

// test to confirm employee object is created;
test('Instantiate employee object', () => {
  const e = new Employee();
  expect(typeof(e)).toBe('object');
});

// confirm name can be input as employee name;
test('Can input name value into constructor', () => {
  const name = 'name';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

// confirm id can be input as employee id;
test('Can input id value into constructor', () => {
  const id = 100;
  const e = new Employee('name', id);
  expect(e.id).toBe(id);
});
  
// confirm email can be input as employee email;
test('Can input email value into constructor', () => {
  const email = 'abc@abc.com';
  const e = new Employee('name', 100, email);
  expect(e.email).toBe(email);
});

// test getName function; should return employee's name;
test('getName accesses name of object', () => {
  const testVal = 'name';
  const e = new Employee(testVal);
  expect(e.getName()).toEqual(testVal); 
});

// test getId function; should return employee's id;
test('getId accesses id of object', () => {
    const testVal = 100;
    const e = new Employee('name', testVal);
    expect(e.getId()).toEqual(testVal); 
  });

// test getEmail function; should return employee's email;
test('getEmail accesses email of object', () => {
    const testVal = 'abc@abc.com';
    const e = new Employee('name', 100, testVal);
    expect(e.getEmail()).toEqual(testVal); 
  });

// test getRole function; should return employee's role;
test('getRole accesses job role of object', () => {
    const testVal = 'Employee';
    const e = new Employee('name', 100, 'abc@abc.com');
    expect(e.getRole()).toEqual(testVal); 
  });