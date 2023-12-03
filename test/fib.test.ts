import { fib1, fib2 } from "../src/fib";

const samples = [
  [1, 1],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 5],
  [6, 8],
  [20, 6765],
  [0, 0],
  [1.1, 0],
  [-1, 0],
];

describe("fib1", () => {
  test.each(samples)("%i => %i", (input, expected) => {
    expect(fib1(input)).toEqual(expected);
  });
});

describe("fib2", () => {
  test.each(samples)("%i => %i", (input, expected) => {
    expect(fib2(input)).toEqual(expected);
  });
});
