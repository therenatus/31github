let removeDuplicates = function(nums: number[]) {
  let start: number = 0;

  for(let i = 0; i < nums.length; ++i) {
    if(nums[i] != nums[i + 1]) {
      nums[start++] = nums[i];
    }
  }
  return start;
};