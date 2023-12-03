import { dynamicProgramming } from "../src/dynamicProgramming";

describe("fibonacci", () => {
  const samples = [
    { input: 1, expected: 1 },
    { input: 2, expected: 1 },
    { input: 3, expected: 2 },
    { input: 4, expected: 3 },
    { input: 5, expected: 5 },
    { input: 6, expected: 8 },
    { input: 20, expected: 6765 },
    { input: 0, expected: 0 },
  ];

  function fib(y: number, x: number, table: number[][]): number {
    if (x <= 0) return 0;
    if (x <= 2) return 1;
    return table[y][x - 1] + table[y][x - 2];
  }

  test.each(samples)(
    "([], $input, fib) => $expected",
    ({ input, expected }) => {
      expect(dynamicProgramming([], input, fib)).toEqual(expected);
    }
  );
});

describe("bin packing", () => {
  const samples = [
    { input: { items: [4, 7, 8, 5, 1], capacity: 10 }, expected: true },
    { input: { items: [4, 7, 8, 5, 1], capacity: 22 }, expected: false },
  ];

  function binPacking(
    y: number,
    x: number,
    table: boolean[][],
    items: number[]
  ): boolean {
    if (y === 0) return x === 0;
    // 上のマスがtrueの場合 : true
    if (table[y - 1][x]) return true;
    // items[y - 1]が入らない場合 : false
    if (x < items[y - 1]) return false;
    // 上の行のx-items[y - 1]を代入
    return table[y - 1][x - items[y - 1]];
  }

  test.each(samples)(
    "($input.items, $input.capacity, binPacking) => $expected",
    ({ input, expected }) => {
      expect(
        dynamicProgramming(input.items, input.capacity, binPacking)
      ).toEqual(expected);
    }
  );
});

describe("knapsack", () => {
  type Item = {
    cost: number;
    value: number;
  };

  const items: Item[] = [
    { cost: 3, value: 4 },
    { cost: 4, value: 7 },
    { cost: 5, value: 8 },
    { cost: 4, value: 5 },
    { cost: 1, value: 1 },
  ];

  const samples = [
    { input: { items, capacity: 10 }, expected: 16 },
    { input: { items, capacity: 22 }, expected: 25 },
  ];

  function knapsack(
    y: number,
    x: number,
    table: number[][],
    items: Item[]
  ): number {
    if (y === 0) return 0;
    // items[i]が入らない場合 : 上のマスを代入
    if (x < items[y - 1].cost) return table[y - 1][x];
    // items[i]が入る場合 : 上のマスと比較して大きい方を代入
    return Math.max(
      table[y - 1][x - items[y - 1].cost] + items[y - 1].value,
      table[y - 1][x]
    );
  }

  test.each(samples)(
    "($input.items, $input.capacity, knapsack) => $expected",
    ({ input, expected }) => {
      expect(dynamicProgramming(input.items, input.capacity, knapsack)).toEqual(
        expected
      );
    }
  );
});
