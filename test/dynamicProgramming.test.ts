import { dynamicProgramming } from "../src/dynamicProgramming";

describe("bin packing", () => {
  const items = [
    { id: 1, cost: 150, value: 150 },
    { id: 2, cost: 200, value: 200 },
    { id: 3, cost: 250, value: 250 },
    { id: 4, cost: 200, value: 200 },
    { id: 5, cost: 50, value: 50 },
  ];

  test("pattern problem 1 return: 500, true", () => {
    const capacity = 500;
    const result = dynamicProgramming(capacity, items);

    expect(result).toBe(500);
    expect(result === capacity).toBe(true);
  });

  test("pattern 2 return: 700, false", () => {
    const capacity = 720;
    const result = dynamicProgramming(capacity, items);

    expect(result).toBe(700);
    expect(result === capacity).toBe(false);
  });
});

describe("knapsack", () => {
  const items = [
    { id: 1, cost: 150, value: 4 },
    { id: 2, cost: 200, value: 7 },
    { id: 3, cost: 250, value: 8 },
    { id: 4, cost: 200, value: 5 },
    { id: 5, cost: 50, value: 1 },
  ];

  test("pattern 1 return: 16", () => {
    const capacity = 500;
    const result = dynamicProgramming(capacity, items);

    expect(result).toBe(16);
  });

  test("pattern 2 return: 21", () => {
    const capacity = 720;
    const result = dynamicProgramming(capacity, items);

    expect(result).toBe(21);
  });
});
