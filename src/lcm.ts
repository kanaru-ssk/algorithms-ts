// 最小公倍数

import { gcd } from "./gcd";

export function lcm(a: number, b: number): number {
  if (
    a < 0 ||
    b < 0 ||
    (a === 0 && b === 0) ||
    !Number.isInteger(a) ||
    !Number.isInteger(b)
  )
    return 0;

  return (a / gcd(a, b)) * b;
}
