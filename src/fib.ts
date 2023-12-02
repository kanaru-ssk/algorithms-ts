// フィボナッチ数列

// 再帰法
export function fib1(n: number): number {
  if (!Number.isInteger(n)) return 0;

  if (n <= 2) return 1;

  // 2まで再起的に呼び出す
  return fib1(n - 1) + fib1(n - 2);
}

// 動的計画法
// 1から必要な計算のみ行う
export function fib2(n: number): number {
  if (!Number.isInteger(n) || n <= 0) return 0;

  let a: number[] = Array(n);

  a[0] = a[1] = 1;

  for (let i = 2; i < n; ++i) {
    a[i] = a[i - 1] + a[i - 2];
  }

  return a[n - 1];
}
