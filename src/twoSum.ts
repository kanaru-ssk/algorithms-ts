type Cell = {
  possible: boolean;
  indexes: number[];
};

export function twoSum(nums: number[], target: number): number[] {
  // 明らかに使わない値は除外
  const filteredNums = nums.filter((num) => num <= target);

  // テーブル作成
  const tableH = filteredNums.length + 1;
  const tableW = target + 1;
  let table: Cell[][] = Array.from({ length: tableH }, () => Array(tableW));

  // 最上段を初期化
  for (let x = 0; x < tableW; x++) {
    table[0][x] = { possible: x === 0, indexes: [] };
  }

  // 各セルの値を計算
  for (let y = 1; y < tableH; y++) {
    for (let x = 0; x < tableW; x++) {
      if (table[y - 1][x].possible) {
        table[y][x] = table[y - 1][x];
      } else {
        const tmp = x - filteredNums[y - 1];
        if (tmp >= 0 && tmp < tableW && table[y - 1][tmp].possible) {
          table[y][x] = {
            possible: true,
            indexes: [...table[y - 1][tmp].indexes, y - 1],
          };
        } else {
          table[y][x] = { possible: false, indexes: [] };
        }
      }

      if (x === target && table[y][target].possible)
        return table[y][target].indexes;
    }
  }

  return [];
}
