export function gcd(a: number, b: number): number {
  if (!Number.isInteger(a) || a <= 0 || !Number.isInteger(b) || b <= 0)
    return 0;

  while (b !== 0) {
    const remain = a % b;
    a = b;
    b = remain;
  }

  return a;
}
