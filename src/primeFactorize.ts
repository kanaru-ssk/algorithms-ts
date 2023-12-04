// 素因数分解 (Prime Factorization)

type Result = { [key: number]: number };

export function primeFactorize(n: number): Result {
  if (!Number.isInteger(n) || n <= 0) return {};

  let result: Result = {};
  for (let i = 2; i * i <= n; ++i) {
    if (n % i !== 0) continue;

    let e = 0;
    while (n % i === 0) {
      ++e;
      n /= i;
    }

    result[i] = e;
  }

  if (n != 1) {
    result[n] = 1;
  }

  return result;
}
