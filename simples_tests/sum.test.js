const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('try to send null to a variable', () => {
  expect(typeof sum(null, 2)).not.toBe('number');
  expect(typeof sum(null, 2)).toBe('string');
});

test('try to send string to a variable', () => {
  expect(typeof sum('a', 2)).toBe('string');
  expect(typeof sum(1, 'b')).toBe('string');
});