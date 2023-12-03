// 動的計画法

export function dynamicProgramming<T, U>(
  items: U[],
  capacity: number,
  calcCell: (y: number, x: number, table: T[][], items: U[]) => T
) {
  const tableH = items.length + 1;
  const tableW = capacity + 1;
  let table: T[][] = Array.from({ length: tableH }, () =>
    Array.from({ length: tableW })
  );

  for (let y = 0; y < tableH; y++) {
    for (let x = 0; x < tableW; x++) {
      table[y][x] = calcCell(y, x, table, items);
    }
  }

  return table[tableH - 1][tableW - 1];
}
