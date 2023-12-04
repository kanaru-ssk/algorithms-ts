// 最長共通部分列 (Longest Common Subsequence)

import { dynamicProgramming } from "./dynamicProgramming";

export function lcs(a: string, b: string): number {
  function calcCell(
    table: number[],
    [y, x]: number[],
    element: { a: string; b: string }
  ): number {
    if (y === 0 || x === 0) return 0;
    const h = element.b.length + 1;
    if (element.a.charAt(y - 1) === element.b.charAt(x - 1))
      return table[(y - 1) * h + x - 1] + 1;
    return Math.max(table[(y - 1) * h + x], table[y * h + x - 1]);
  }

  return dynamicProgramming({ a, b }, calcCell);
}
