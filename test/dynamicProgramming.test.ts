import { dynamicProgramming } from "../src/dynamicProgramming";

describe("fibonacci number", () => {
  function calcCell(y: number, x: number, table: number[][]): number {
    if (x <= 0) return 0;
    if (x <= 2) return 1;
    return table[y][x - 1] + table[y][x - 2];
  }

  test("n 1 return 1", () => {
    const n = 1;
    const result = dynamicProgramming([], n, calcCell);
    expect(result).toBe(1);
  });

  test("n 2 return 1", () => {
    const n = 2;
    const result = dynamicProgramming([], n, calcCell);
    expect(result).toBe(1);
  });

  test("n 6 return 8", () => {
    const n = 6;
    const result = dynamicProgramming([], n, calcCell);
    expect(result).toBe(8);
  });
});

describe("bin packing", () => {
  const items = [4, 7, 8, 5, 1];
  function calcCell(
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

  test("pattern problem 1 return true", () => {
    const capacity = 10;
    const result = dynamicProgramming(items, capacity, calcCell);
    expect(result).toBe(true);
  });

  test("pattern problem 1 return true", () => {
    const capacity = 22;
    const result = dynamicProgramming(items, capacity, calcCell);
    expect(result).toBe(false);
  });
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
  function calcCell(
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

  test("pattern 1 return 16", () => {
    const capacity = 10;
    const result = dynamicProgramming(items, capacity, calcCell);

    expect(result).toBe(16);
  });

  test("pattern 2 return 25", () => {
    const capacity = 30;
    const result = dynamicProgramming(items, capacity, calcCell);

    expect(result).toBe(25);
  });
});
