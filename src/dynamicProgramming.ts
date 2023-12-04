// 動的計画法 (Dynamic Programming)

export function dynamicProgramming<T extends Object, U>(
  elements: T,
  calcCell: (table: U[], iterators: number[], elements: T) => U
): U {
  const lengths = calcLengths(elements);
  const table: U[] = [];

  (function makeTable(iterators: number[]) {
    if (lengths.length === iterators.length) {
      table.push(calcCell(table, iterators, elements));
    } else {
      const length = lengths[iterators.length];
      for (let i = 0; i < length; i++) {
        makeTable([...iterators, i]);
      }
    }
  })([]);

  return table[table.length - 1];
}

function calcLengths<T extends Object>(elements: T): number[] {
  return Object.values(elements).map((value) => {
    if (typeof value === "number") return value + 1;
    if (typeof value === "string") return value.length + 1;
    if (Array.isArray(value)) return value.length + 1;
    return 1;
  });
}
