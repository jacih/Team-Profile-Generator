//declare Engineer library req'd;
const Engineer = require('../lib/engineer');

// test to confirm engineer object is created;
test('Instantiate engineer object', () => {
  const e = new Engineer();
  expect(typeof(e)).toBe('object');
});

// test to confirm github can be input as engineer's github acct;
test('can input github acct value into constructor', () => {
  const testValue = 'github';
  const e = new Engineer('name', 100, 'abc@abc.com', testValue);
  expect(e.github).toBe(testValue);
});

// test getGithub function; should return engineers's github acct;
test('getGithub accesses github of object', () => {
  const testValue = "github";
  const e = new Engineer('name', 100, 'abc@abc.com', testValue);
  expect(e.getGithub()).toBe(testValue);
});

// test getRole function; should return employee's role;
test('getRole accesses job role of object', () => {
  const testValue = 'Engineer';
  const e = new Engineer('name', 100, 'abc@abc.com', 'github');
  expect(e.getRole()).toBe(testValue);
});