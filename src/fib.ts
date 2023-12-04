// フィボナッチ数列 (Fibonacci Sequence)

import { dynamicProgramming } from "./dynamicProgramming";

// 再帰法
export function fib1(n: number): number {
  if (!Number.isInteger(n) || n <= 0) return 0;

  if (n <= 2) return 1;

  // 2まで再起的に呼び出す
  return fib1(n - 1) + fib1(n - 2);
}

// 動的計画法
export function fib2(n: number): number {
  if (!Number.isInteger(n) || n <= 0) return 0;

  function calcCell(table: number[], [i]: number[]): number {
    if (i <= 2) return 1;
    return table[i - 1] + table[i - 2];
  }

  return dynamicProgramming({ n }, calcCell);
}
