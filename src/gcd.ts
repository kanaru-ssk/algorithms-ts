// 最大公約数 (greatest common divisor)

// ユークリッド互除法
export function gcd(a: number, b: number): number {
  if (b === 0) return Math.abs(a);

  // 割り切れるまで再帰的に呼び出す
  return gcd(b, a % b);
}

export function gcdArray(array: number[]): number {
  if (array.length === 0) return 0;
  return array.reduce((result: number, num: number) => gcd(result, num));
}
