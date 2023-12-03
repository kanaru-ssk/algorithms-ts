import { primeFactorize } from "../src/primeFactorize";

describe("primeFactorize", () => {
  const samples = [
    { input: 1, expected: {} },
    { input: 2, expected: { 2: 1 } },
    { input: 12, expected: { 2: 2, 3: 1 } },
    { input: 53, expected: { 53: 1 } },
    { input: 4876, expected: { 2: 2, 23: 1, 53: 1 } },
    { input: 0, expected: {} },
    { input: 1.1, expected: {} },
    { input: -1, expected: {} },
  ];

  test.each(samples)("($input) => $expected", ({ input, expected }) => {
    expect(primeFactorize(input)).toEqual(expected);
  });
});
