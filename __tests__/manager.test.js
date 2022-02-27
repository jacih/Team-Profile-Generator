//declare Manager library req'd;
const Manager = require('../lib/manager');

// test to confirm manager object is created;
test('Instantiate manager object', () => {
  const e = new Manager();
  expect(typeof(e)).toBe('object');
});

// test to confirm office number can be input as manager's office number;
test('can input office number value into constructor', () => {
  const testValue = 1231231234;
  const e = new Manager('name', 1231231234, 'abc@abc.com', testValue);
  expect(e.officeN).toBe(testValue);
});

// test getOfficeN function; should return manager's offuce number;
test('getOfficeN accesses office number of object', () => {
  const testValue = 1231231234;
  const e = new Manager('name', 1231231234, 'abc@abc.com', testValue);
  expect(e.getOfficeN()).toBe(testValue);
});

// test getRole function; should return employee's role;
test('getRole accesses job role of object', () => {
  const testValue = 'Manager';
  const e = new Manager('name', 100, 'abc@abc.com', 1231231234);
  expect(e.getRole()).toBe(testValue);
});
