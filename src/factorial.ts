// 階乗

export function factorial(n: number): number {
  let result = 1;
  for (let i = n; i > 1; i--) result *= i;

  return result;
}
