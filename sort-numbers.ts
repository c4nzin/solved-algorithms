export function solution(nums: number[]): number[] {
  if (!nums) return [];
  return nums.sort((a: number, b: number) => a - b);
}

console.log(solution([1, 2, 3, 4, 6, 123, 24, 5, 3241]));
