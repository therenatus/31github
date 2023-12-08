function trap(height: number[]): number {
  let maxLeft: number = height[0];
  let maxRight: number = height[height.length - 1];

  let left: number = 1;
  let right: number = height.length - 2;
  let total: number = 0;

  while (left <= right) {
    if (maxLeft <= maxRight) {
      maxLeft = Math.max(maxLeft, height[left]);
      total += maxLeft - height[left];
      left += 1;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      total += maxRight - height[right];
      right -= 1;
    }
  }

  return total;
}