import { gcd } from "../src/gcd";

test("args: (18, 12) return: 6", () => {
  const result = gcd(18, 12);
  expect(result).toBe(6);
});

test("args: (12, 18) return: 6", () => {
  const result = gcd(12, 18);
  expect(result).toBe(6);
});

test("args: (1, 1) return: 1", () => {
  const result = gcd(1, 1);
  expect(result).toBe(1);
});

test("args: (10, 0) return: 10", () => {
  const result = gcd(10, 0);
  expect(result).toBe(10);
});

test("args: (0, 10) return: 10", () => {
  const result = gcd(0, 10);
  expect(result).toBe(10);
});

test("args: (0, 0) return: 0", () => {
  const result = gcd(0, 0);
  expect(result).toBe(0);
});

test("args: (1.1, 1.2) return: 0", () => {
  const result = gcd(1.1, 1.2);
  expect(result).toBe(0);
});

test("args: (-1, -2) return: 0", () => {
  const result = gcd(-1, -2);
  expect(result).toBe(0);
});
