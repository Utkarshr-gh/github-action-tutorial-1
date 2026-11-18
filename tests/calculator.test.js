const { add, modulo } = require('../src/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 3', () => {
  expect(add(2, 2)).toBe(4);
});

test('modulo 10 and 3 is 1', () => {
  expect(modulo(10, 3)).toBe(1);
});
