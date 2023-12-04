import { dynamicProgramming } from "../src/dynamicProgramming";

describe("fibonacci", () => {
  const samples = [
    { input: { n: 0 }, expected: 0 },
    { input: { n: 1 }, expected: 1 },
    { input: { n: 2 }, expected: 1 },
    { input: { n: 3 }, expected: 2 },
    { input: { n: 4 }, expected: 3 },
    { input: { n: 5 }, expected: 5 },
    { input: { n: 6 }, expected: 8 },
    { input: { n: 20 }, expected: 6765 },
  ];

  function fib(table: number[], [i]: number[]): number {
    if (i <= 0) return 0;
    if (i <= 2) return 1;
    return table[i - 1] + table[i - 2];
  }

  test.each(samples)("($input, fib) => $expected", ({ input, expected }) => {
    expect(dynamicProgramming(input, fib)).toEqual(expected);
  });
});

describe("bin packing", () => {
  type Input = {
    items: number[];
    capacity: number;
  };
  type Sample = {
    input: Input;
    expected: boolean;
  };
  const samples: Sample[] = [
    { input: { items: [4, 7, 8, 5, 1], capacity: 10 }, expected: true },
    { input: { items: [4, 7, 8, 5, 1], capacity: 22 }, expected: false },
  ];

  function binPacking(
    table: boolean[],
    [y, x]: number[],
    element: Input
  ): boolean {
    const h = element.capacity + 1;
    if (y === 0) return x === 0;
    // 上のマスがtrueの場合 : true
    if (table[(y - 1) * h + x]) return true;
    // items[y - 1]が入らない場合 : false
    if (x < element.items[y - 1]) return false;
    // 上の行のx-items[y - 1]を代入
    return table[(y - 1) * h + x - element.items[y - 1]];
  }

  test.each(samples)(
    "($input, binPacking) => $expected",
    ({ input, expected }) => {
      expect(dynamicProgramming(input, binPacking)).toEqual(expected);
    }
  );
});

describe("knapsack", () => {
  type Item = {
    cost: number;
    value: number;
  };
  type Input = {
    items: Item[];
    capacity: number;
  };
  type Sample = {
    input: Input;
    expected: number;
  };

  const items: Item[] = [
    { cost: 3, value: 4 },
    { cost: 4, value: 7 },
    { cost: 5, value: 8 },
    { cost: 4, value: 5 },
    { cost: 1, value: 1 },
  ];

  const samples: Sample[] = [
    { input: { items, capacity: 10 }, expected: 16 },
    { input: { items, capacity: 22 }, expected: 25 },
  ];

  function knapsack(table: number[], [y, x]: number[], element: Input): number {
    const h = element.capacity + 1;
    if (y === 0) return 0;
    // items[i]が入らない場合 : 上のマスを代入
    if (x < element.items[y - 1].cost) return table[(y - 1) * h + x];
    // items[i]が入る場合 : 上のマスと比較して大きい方を代入
    return Math.max(
      table[(y - 1) * h + x - element.items[y - 1].cost] +
        element.items[y - 1].value,
      table[(y - 1) * h + x]
    );
  }

  test.each(samples)(
    "($input, knapsack) => $expected",
    ({ input, expected }) => {
      expect(dynamicProgramming(input, knapsack)).toEqual(expected);
    }
  );
});
