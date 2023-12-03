import { gcd, gcdArray } from "../src/gcd";

describe("gcd", () => {
  const samples = [
    { input: [18, 12], expected: 6 },
    { input: [12, 18], expected: 6 },
    { input: [1, 1], expected: 1 },
    { input: [10, 0], expected: 10 },
    { input: [0, 10], expected: 10 },
    { input: [0, 0], expected: 0 },
    { input: [10.5, 4.5], expected: 1.5 },
    { input: [-10, -15], expected: 5 },
  ];

  test.each(samples)("($input) => $expected", ({ input, expected }) => {
    expect(gcd(input[0], input[1])).toEqual(expected);
  });
});

describe("gcdArray", () => {
  const samples = [
    { input: [18, 12], expected: 6 },
    { input: [36, 12, 48, 120], expected: 12 },
    { input: [0, 0, 0], expected: 0 },
    { input: [-45, -10, -55], expected: 5 },
    { input: [10.5, 1.5, 4.5], expected: 1.5 },
    { input: [-45, 0, 55], expected: 5 },
    { input: [3], expected: 3 },
    { input: [], expected: 0 },
  ];

  test.each(samples)("($input) => $expected", ({ input, expected }) => {
    expect(gcdArray(input)).toEqual(expected);
  });
});
