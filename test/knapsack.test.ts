import { knapsack } from "../src/knapsack";

test("return: 16", () => {
  const result = knapsack(500, [
    { id: 1, cost: 150, value: 4 },
    { id: 2, cost: 200, value: 7 },
    { id: 3, cost: 250, value: 8 },
    { id: 4, cost: 200, value: 5 },
    { id: 5, cost: 50, value: 1 },
  ]);
  expect(result).toBe(16);
});

test("args: 0 return: 1", () => {
  const result = knapsack(720, [
    { id: 1, cost: 150, value: 4 },
    { id: 2, cost: 200, value: 7 },
    { id: 3, cost: 250, value: 8 },
    { id: 4, cost: 200, value: 5 },
    { id: 5, cost: 50, value: 1 },
  ]);
  expect(result).toBe(21);
});
