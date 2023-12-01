import { primeFactorize } from "../src/primeFactorize";

test("args: 1 return: {}", () => {
  const result = primeFactorize(1);
  expect(result).toEqual({});
});

test("args: 2 return: { 2: 1 }", () => {
  const result = primeFactorize(2);
  expect(result).toEqual({ 2: 1 });
});

test("args: 12 return: { 2: 2, 3: 1 }", () => {
  const result = primeFactorize(12);
  expect(result).toEqual({ 2: 2, 3: 1 });
});

test("args: 53 return: { 53: 1 }", () => {
  const result = primeFactorize(53);
  expect(result).toEqual({ 53: 1 });
});

test("args: 4692 return: { 2: 2, 23: 1, 53: 1 }", () => {
  const result = primeFactorize(4876);
  expect(result).toEqual({ 2: 2, 23: 1, 53: 1 });
});

test("args: 0 return: {}", () => {
  const result = primeFactorize(0);
  expect(result).toEqual({});
});

test("args: 1.1 return: {}", () => {
  const result = primeFactorize(1.1);
  expect(result).toEqual({});
});

test("args: -1 return: {}", () => {
  const result = primeFactorize(-1);
  expect(result).toEqual({});
});
