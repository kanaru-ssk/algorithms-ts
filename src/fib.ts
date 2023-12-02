// フィボナッチ数列

// 再帰法
export function fib1(n: number): number {
  if (!Number.isInteger(n)) return 0;

  if (n <= 2) return 1;

  // 2まで再起的に呼び出す
  return fib1(n - 1) + fib1(n - 2);
}

// メモ化再帰法
// 一度計算したした結果は再利用する
let memo: number[] = [];
export function fib2(n: number): number {
  if (!Number.isInteger(n)) return 0;

  if (n <= 2) return 1;

  // 計算済みの値はメモリから取り出す
  if (!memo[n]) memo[n] = fib2(n - 1) + fib2(n - 2);
  return memo[n];
}

// 動的計画法
// 1から必要な計算のみ行う
export function fib3(n: number): number {
  if (!Number.isInteger(n) || n <= 0) return 0;

  let a: number[] = Array(n);

  a[0] = a[1] = 1;

  for (let i = 2; i < n; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }

  return a[n - 1];
}
