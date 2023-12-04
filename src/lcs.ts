// 最長共通部分列 (Longest Common Subsequence)

export function lcs(a: string, b: string): number {
  const tableH = a.length + 1;
  const tableW = b.length + 1;
  const table: number[][] = Array.from({ length: tableH }, () =>
    Array(tableW).fill(0)
  );

  for (let y = 1; y < tableH; y++) {
    for (let x = 1; x < tableW; x++) {
      if (a[y - 1] === b[x - 1]) {
        table[y][x] = table[y - 1][x - 1] + 1;
      } else {
        table[y][x] = Math.max(table[y - 1][x], table[y][x - 1]);
      }
    }
  }

  return table[tableH - 1][tableW - 1];
}
