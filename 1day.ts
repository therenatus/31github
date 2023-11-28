function singleNumber(nums: number[]): number {
  const uniq: number[] = Array.from(new Set(nums));

  const reduceSum = (s: number, i: number) => s + i;

  const uniqSum: number = uniq.reduce(reduceSum);
  const numSum: number = nums.reduce(reduceSum);

  return uniqSum * 2 - numSum;
}