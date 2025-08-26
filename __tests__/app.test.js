const { greet, newExampleGreeting } = require('../app');

test('greets the user by name', () => {
  expect(greet('DevOps')).toBe('Hello, DevOps!');
});

test('newExampleGreeting returns the correct message', () => {
  expect(newExampleGreeting()).toBe('This function was created by Fabio');
});
