function twoSum(nums: number[], target: number): number[] {
  const numObject: { [key: number]: number } = {};
  for(let i = 0; i < nums.length; i++){
    numObject[nums[i]] = i;
  }
  for(let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    if(numObject[diff] && numObject[diff] !== diff){
      return [i, numObject[diff]]
    }
  }
  return []
}