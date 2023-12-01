// 最大公約数

export function gcd(a: number, b: number): number {
  if (!Number.isInteger(a) || a < 0 || !Number.isInteger(b) || b < 0) return 0;

  if (b === 0) return a;
  else return gcd(b, a % b);
}
