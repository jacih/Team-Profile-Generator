//declare Intern library req'd;
const Intern = require('../lib/intern');

// test to confirm intern object is created;
test('instantiate intern object', () => {
  const e = new Intern();
  expect(typeof(e)).toBe('object');
});

// test to confirm school can be input as intern's school;
test('can input school name into constructor', () => {
  const testValue = 'school';
  const e = new Intern('name', 100, 'abc@abc.com', testValue);
  expect(e.school).toBe(testValue);
});

// test getSchool function; should return intern's school;
test('getSchool accesses job role of object', () => {
    const testValue = 'school';
    const e = new Intern('name', 100, 'abc@abc.com', 'school');
    expect(e.getSchool()).toBe(testValue);
  });

// test getRole function; should return employee's role;
test('getRole accesses job role of object', () => {
  const testValue = 'Intern';
  const e = new Intern('name', 100, 'abc@abc.com', 'school');
  expect(e.getRole()).toBe(testValue);
});
