import { lcm } from "../src/lcm";

test("args: (18, 12) return: 36", () => {
  const result = lcm(18, 12);
  expect(result).toBe(36);
});

test("args: (12, 18) return: 36", () => {
  const result = lcm(12, 18);
  expect(result).toBe(36);
});

test("args: (1, 1) return: 1", () => {
  const result = lcm(1, 1);
  expect(result).toBe(1);
});

test("args: (10, 0) return: 0", () => {
  const result = lcm(10, 0);
  expect(result).toBe(0);
});

test("args: (0, 10) return: 0", () => {
  const result = lcm(0, 10);
  expect(result).toBe(0);
});

test("args: (0, 0) return: 0", () => {
  const result = lcm(0, 0);
  expect(result).toBe(0);
});

test("args: (1.1, 1.2) return: 0", () => {
  const result = lcm(1.1, 1.2);
  expect(result).toBe(0);
});

test("args: (-1, -2) return: 0", () => {
  const result = lcm(-1, -2);
  expect(result).toBe(0);
});
