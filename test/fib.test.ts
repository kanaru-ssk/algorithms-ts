import { fib1, fib2 } from "../src/fib";

const samples = [
  { input: 1, expected: 1 },
  { input: 2, expected: 1 },
  { input: 3, expected: 2 },
  { input: 4, expected: 3 },
  { input: 5, expected: 5 },
  { input: 6, expected: 8 },
  { input: 20, expected: 6765 },
  { input: 0, expected: 0 },
  { input: 1.1, expected: 0 },
  { input: -1, expected: 0 },
];

describe("fib1", () => {
  test.each(samples)("($input) => $expected", ({ input, expected }) => {
    expect(fib1(input)).toEqual(expected);
  });
});

describe("fib2", () => {
  test.each(samples)("($input) => $expected", ({ input, expected }) => {
    expect(fib2(input)).toEqual(expected);
  });
});
