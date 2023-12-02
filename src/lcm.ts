// 最小公倍数

import { gcd } from "./gcd";

export function lcm(a: number, b: number): number {
  if (a === 0 && b === 0) return 0;

  a = Math.abs(a);
  b = Math.abs(b);

  return (a / gcd(a, b)) * b;
}

export function lcmArray(array: number[]): number {
  if (array.length === 0) return 0;
  return array.reduce((result: number, num: number) => lcm(result, num));
}
