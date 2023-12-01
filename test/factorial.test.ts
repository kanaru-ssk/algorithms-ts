import { factorial } from "../src/factorial";

test("args: 0 return: 1", () => {
  const result = factorial(0);
  expect(result).toBe(1);
});

test("args: 1 return: 1", () => {
  const result = factorial(1);
  expect(result).toBe(1);
});

test("args: 3 return: 6", () => {
  const result = factorial(3);
  expect(result).toBe(6);
});

test("args: 10 return: 3628800", () => {
  const result = factorial(10);
  expect(result).toBe(3628800);
});

test("args: 1.1 return: 0", () => {
  const result = factorial(1.1);
  expect(result).toBe(0);
});

test("args: -1 return: 0", () => {
  const result = factorial(-1);
  expect(result).toBe(0);
});
