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

  function calcCell(y: number, x: number, table: number[][]): number {
    if (x <= 2) return 1;
    return table[y][x - 1] + table[y][x - 2];
  }

  return dynamicProgramming([], n, calcCell);
}
