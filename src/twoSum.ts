// 整数の配列numsの中から、和がtargetになるindexの組みを一つ出力する。
// 2 <= nums.length <= 104
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9

export function twoSum(nums: number[], target: number): number[] {
  const length = nums.length;
  for (let y = 0; y < length - 1; y++) {
    for (let x = 1 + y; x < length; x++) {
      if (nums[y] + nums[x] === target) return [y, x];
    }
  }

  return [];
}
