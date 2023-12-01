// 最大公約数

export function gcd(a: number, b: number): number {
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 0;

  if (b === 0) return a;
  else return gcd(b, a % b);
}
