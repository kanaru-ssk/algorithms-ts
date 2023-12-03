import { lcm, lcmArray } from "../src/lcm";

describe("lcm", () => {
  const samples = [
    { input: [18, 12], expected: 36 },
    { input: [12, 18], expected: 36 },
    { input: [1, 1], expected: 1 },
    { input: [10, 0], expected: 0 },
    { input: [0, 10], expected: 0 },
    { input: [0, 0], expected: 0 },
    { input: [10.5, 4.5], expected: 31.5 },
    { input: [-10, -15], expected: 30 },
  ];

  test.each(samples)("($input) => $expected", ({ input, expected }) => {
    expect(lcm(input[0], input[1])).toEqual(expected);
  });
});

describe("lcmArray", () => {
  const samples = [
    { input: [18, 12], expected: 36 },
    { input: [36, 12, 48, 120], expected: 720 },
    { input: [0, 0, 0], expected: 0 },
    { input: [-45, -10, -55], expected: 990 },
    { input: [10.5, 1.5, 4.5], expected: 31.5 },
    { input: [-45, 0, 55], expected: 0 },
    { input: [3], expected: 3 },
    { input: [0], expected: 0 },
    { input: [], expected: 0 },
  ];

  test.each(samples)("($input) => $expected", ({ input, expected }) => {
    expect(lcmArray(input)).toEqual(expected);
  });
});
