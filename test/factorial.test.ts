import { factorial } from "../src/factorial";

describe("factorial", () => {
  const samples = [
    { input: 0, expected: 1 },
    { input: 1, expected: 1 },
    { input: 2, expected: 2 },
    { input: 3, expected: 6 },
    { input: 10, expected: 3628800 },
    { input: 1.1, expected: 0 },
    { input: -1, expected: 0 },
  ];

  test.each(samples)("($input) => $expected", ({ input, expected }) => {
    expect(factorial(input)).toEqual(expected);
  });
});
