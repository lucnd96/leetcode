/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length < 2) {
    return 0;
  }
  let max = 0;
  let left = height[0];
  for (let i = 0; i < height.length; i++) {
    if (height[i] <= left && max) {
      left = height[i];
      continue;
    }
    for (let j = height.length; j > i; j--) {
      if (height[j] >= height[i]) {
        const area = height[i] * (j - i);
        if (area > max) {
          max = area;
        }
        break;
      } else {
        const area = height[j] * (j - i);
        if (area > max) {
          max = area;
        }
      }
    }
    left = height[i];
  }
  return max;
};
const start = Date.now();
console.log(maxArea([1, 1]));
console.log(Date.now() - start);

/**
 * @param {number[]} height
 */
const maxArea2 = (height) => {
  if (height.length <= 1) {
    return 0;
  }
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    if (area > max) {
      max = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
