//declare employee library req'd;
const Employee = require('../lib/employee');

// test to confirm employee object is created;
test('Instantiate employee object', () => {
  const e = new Employee();
  expect(typeof(e)).toBe('object');
});

// confirm name can be input as employee name;
test('Can input name value into constructor', () => {
  const testVal = 'name';
  const e = new Employee(testVal);
  expect(e.testVal).toBe(testVal);
});

// confirm id can be input as employee id;
test('Can input id value into constructor', () => {
  const testVal = INT;
  const e = new Employee('name', testVal);
  expect(e.testVal).toBe(testVal);
});
  
// confirm email can be input as employee email;
test('Can input email value into constructor', () => {
  const testVal = 'abc@abc.com';
  const e = new Employee('name', INT, testVal);
  expect(e.testVal).toBe(testVal);
});

// test getName function; should return employee's name;
test('getName accesses name of object', () => {
  const testVal = 'name';
  const e = new Employee(testVal);
  expect(e.getName()).toBe(testVal); 
});

// test getId function; should return employee's id;
test('getId accesses id of object', () => {
    const testVal = INT;
    const e = new Employee('name', testVal);
    expect(e.getId()).toBe(testVal); 
  });

// test getEmail function; should return employee's email;
test('getEmail accesses email of object', () => {
    const testVal = 'abc@abc.com';
    const e = new Employee('name', INT, testVal);
    expect(e.getEmail()).toBe(testVal); 
  });

// test getRole function; should return employee's role;
test('getRole accesses job role of object', () => {
    const testVal = 'role';
    const e = new Employee('name', INT, 'abc@abc.com');
    expect(e.getRole()).toBe(testVal); 
  });