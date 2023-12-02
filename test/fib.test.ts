import { fib1, fib2, fib3 } from "../src/fib";

describe("fib1", () => {
  test("args: 1 return: 1", () => {
    const result = fib1(1);
    expect(result).toBe(1);
  });

  test("args: 6 return: 8", () => {
    const result = fib1(6);
    expect(result).toBe(8);
  });

  test("args: 0 return: 1", () => {
    const result = fib1(0);
    expect(result).toBe(1);
  });

  test("args: 1.1 return: 0", () => {
    const result = fib1(1.1);
    expect(result).toBe(0);
  });

  test("args: -1 return: 1", () => {
    const result = fib1(-1);
    expect(result).toBe(1);
  });
});

describe("fib2", () => {
  test("args: 1 return: 1", () => {
    const result = fib2(1);
    expect(result).toBe(1);
  });

  test("args: 6 return: 8", () => {
    const result = fib2(6);
    expect(result).toBe(8);
  });

  test("args: 0 return: 1", () => {
    const result = fib2(0);
    expect(result).toBe(1);
  });

  test("args: 1.1 return: 0", () => {
    const result = fib2(1.1);
    expect(result).toBe(0);
  });

  test("args: -1 return: 1", () => {
    const result = fib2(-1);
    expect(result).toBe(1);
  });
});

describe("fib3", () => {
  test("args: 1 return: 1", () => {
    const result = fib3(1);
    expect(result).toBe(1);
  });

  test("args: 6 return: 8", () => {
    const result = fib3(6);
    expect(result).toBe(8);
  });

  test("args: 0 return: 0", () => {
    const result = fib3(0);
    expect(result).toBe(0);
  });

  test("args: 1.1 return: 0", () => {
    const result = fib3(1.1);
    expect(result).toBe(0);
  });

  test("args: -1 return: 0", () => {
    const result = fib3(-1);
    expect(result).toBe(0);
  });
});
