/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const index = binarySearch(nums, 0, nums.length, target);
  if (index === -1) {
    return [-1, -1];
  }
  let left = index;
  let right = index;
  while (left >= 1) {
    if (nums[left - 1] === nums[index]) {
      left--;
      continue;
    }
    break;
  }
  while (right < nums.length - 1) {
    if (nums[right + 1] === nums[index]) {
      right++;
      continue;
    }
    break;
  }
  return [left, right];
};

function binarySearch(arr, left, right, target) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] === target) return mid;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > target) return binarySearch(arr, left, mid - 1, target);

    // Else the element can only be present
    // in right subarray
    return binarySearch(arr, mid + 1, right, target);
  }

  // We reach here when element is not
  // present in array
  return -1;
}
