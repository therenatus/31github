function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  if(nums.length < 3) {
    return result;
  }

  nums = nums.sort((a, b) => a - b);

  for (let i: number = 0; i < nums.length - 2; i++){
    let j: number = i + 1;
    let k:number = nums.length - 1;

    if (nums[i] > 0) {
      break;
    }

    if(i > 0 && nums[i] === nums[i - 1]){
      continue;
    };

    while(j<k){
      let sum = nums[i] + nums[j] + nums[k];
      if(sum === 0) {
        result.push([nums[i],nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
        continue;
      }

      if(sum < 0) {
        j++;
        continue;
      }

      if(sum > 0){
        k--;
        continue;
      }
    }
  }
  return result;
};