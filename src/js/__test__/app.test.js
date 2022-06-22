import demo from '../app';

test('demo test', () => {
  const expected = 5;
  const actual = demo(expected);
  expect(actual).toBe(expected);
});
