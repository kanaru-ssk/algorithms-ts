// 動的計画法

export function dynamicProgramming<T>(
  tableH: number,
  tableW: number,
  calcCell: (table: T[][], y: number, x: number) => T
) {
  let table: T[][] = Array.from({ length: tableH }, () =>
    Array.from({ length: tableW })
  );

  for (let y = 0; y < tableH; y++) {
    for (let x = 0; x < tableW; x++) {
      table[y][x] = calcCell(table, y, x);
    }
  }

  return table[tableH - 1][tableW - 1];
}
