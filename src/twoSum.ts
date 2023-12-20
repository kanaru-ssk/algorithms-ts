// 整数の配列numsの中から、和がtargetになるindexの組みを一つ出力する。
// 2 <= nums.length <= 104
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9

export function twoSum(nums: number[], target: number): number[] {
  for (let y = nums.length - 2; y >= 0; --y) {
    for (let x = nums.length - 1; x > y; --x) {
      if (nums[y] + nums[x] === target) return [y, x];
    }
  }

  return [];
}
