import { lcm, lcmArray } from "../src/lcm";

describe("lcm", () => {
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

  test("args: (10.5, 4.5) return: 0", () => {
    const result = lcm(10.5, 4.5);
    expect(result).toBe(31.5);
  });

  test("args: (-10, -15) return: 0", () => {
    const result = lcm(-10, -15);
    expect(result).toBe(30);
  });
});

describe("lcmArray", () => {
  test("args: [18, 12] return: 6", () => {
    const result = lcmArray([18, 12]);
    expect(result).toBe(36);
  });

  test("args: [36, 12, 48, 120] return: 12", () => {
    const result = lcmArray([36, 12, 48, 120]);
    expect(result).toBe(720);
  });

  test("args: [0, 0, 0] return: 0", () => {
    const result = lcmArray([0, 0, 0]);
    expect(result).toBe(0);
  });

  test("args: [-45, -10, -55] return: 5", () => {
    const result = lcmArray([-45, -10, -55]);
    expect(result).toBe(990);
  });

  test("args: [10.5, 1.5, 4.5] return: 31.5", () => {
    const result = lcmArray([10.5, 1.5, 4.5]);
    expect(result).toBe(31.5);
  });

  test("args: [-45, 0, 55] return: 5", () => {
    const result = lcmArray([-45, 0, 55]);
    expect(result).toBe(0);
  });

  test("args: [3] return: 3", () => {
    const result = lcmArray([3]);
    expect(result).toBe(3);
  });

  test("args: [] return: 0", () => {
    const result = lcmArray([]);
    expect(result).toBe(0);
  });
});
