// 階乗 (Factorial)

export function factorial(n: number): number {
  // 階乗出来ない場合は0を返す
  if (!Number.isInteger(n) || n < 0) return 0;

  if (n <= 1) return 1;

  // 1まで再帰的に呼び出す
  return n * factorial(n - 1);
}
