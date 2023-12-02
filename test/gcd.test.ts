import { gcd, gcdArray } from "../src/gcd";

describe("gcd", () => {
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

  test("args: (10.5, 4.5) return: 1.5", () => {
    const result = gcd(10.5, 4.5);
    expect(result).toBe(1.5);
  });

  test("args: (-10, -15) return: 5", () => {
    const result = gcd(-10, -15);
    expect(result).toBe(5);
  });
});

describe("gcdArray", () => {
  test("args: [18, 12] return: 6", () => {
    const result = gcdArray([18, 12]);
    expect(result).toBe(6);
  });

  test("args: [36, 12, 48, 120] return: 12", () => {
    const result = gcdArray([36, 12, 48, 120]);
    expect(result).toBe(12);
  });

  test("args: [0, 0, 0] return: 0", () => {
    const result = gcdArray([0, 0, 0]);
    expect(result).toBe(0);
  });

  test("args: [-45, 0, 55] return: 5", () => {
    const result = gcdArray([-45, 0, 55]);
    expect(result).toBe(5);
  });

  test("args: [10.5, 0, 4.5] return: 1.5", () => {
    const result = gcdArray([10.5, 0, 4.5]);
    expect(result).toBe(1.5);
  });

  test("args: [3] return: 3", () => {
    const result = gcdArray([3]);
    expect(result).toBe(3);
  });

  test("args: [] return: 0", () => {
    const result = gcdArray([]);
    expect(result).toBe(0);
  });
});
