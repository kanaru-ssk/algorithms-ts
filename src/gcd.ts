// 最大公約数

export function gcd(a: number, b: number): number {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 0;

  // 割り切れるまで再帰的に呼び出す
  if (b !== 0) return gcd(b, a % b);

  return a;
}
