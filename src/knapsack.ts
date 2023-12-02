// ナップサック問題

import { gcdArray } from "./gcd";

type Item = {
  id: number;
  cost: number;
  value: number;
};

export function knapsack(capacity: number, items: Item[]): number {
  // 最大公約数で割ってtableの大きさを最適化
  const gcd = gcdArray([capacity, ...items.map(({ cost }) => cost)]);
  capacity /= gcd;
  items = items.map(({ id, cost, value }) => ({ id, cost: cost / gcd, value }));

  const numItem = items.length;
  let table: number[][] = Array.from({ length: numItem + 1 }, () =>
    Array.from({ length: capacity + 1 }, () => 0)
  );

  for (let i = 1; i < numItem; ++i) {
    for (let j = 0; j <= capacity; ++j) {
      // items[i]が入らない場合 : 上のマスを代入
      if (items[i].cost > j) table[i][j] = table[i - 1][j];
      // items[i]が入る場合 : 上のマスと比較して大きい方を代入
      else
        table[i][j] = Math.max(
          table[i - 1][j - items[i].cost] + items[i].value,
          table[i - 1][j]
        );
    }
  }

  return table[numItem - 1][capacity];
}
