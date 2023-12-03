// フィボナッチ数列

import { dynamicProgramming } from "./dynamicProgramming";

// 再帰法
export function fib1(n: number): number {
  if (!Number.isInteger(n)) return 0;

  if (n <= 2) return 1;

  // 2まで再起的に呼び出す
  return fib1(n - 1) + fib1(n - 2);
}

// 動的計画法
// 1から必要な計算のみ行う
export function fib2(n: number): number {
  if (!Number.isInteger(n) || n <= 0) return 0;

  function calcCell(table: number[][], y: number, x: number): number {
    if (x <= 0) return 0;
    if (x <= 2) return 1;
    return table[y][x - 1] + table[y][x - 2];
  }

  const result = dynamicProgramming(n, calcCell);

  return result;
}
