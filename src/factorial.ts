// 階乗

export function factorial(n: number): number {
  // 階乗出来ない場合は0を返す
  if (!Number.isInteger(n) || n < 0) return 0;

  let result = 1;
  for (let i = n; i > 1; --i) result *= i;

  return result;
}
