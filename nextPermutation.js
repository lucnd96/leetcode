/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
    const len = nums.length;
    let i = len - 2;
    let j = len - 1;

    while (i >= 0 && nums[i] >= nums[i + 1]) i--;

    if (i >= 0) {
        while (j > i && nums[j] <= nums[i]) j--;
        swap(nums, i, j);
        reverse(nums, i + 1, len - 1);
    } else {
        reverse(nums, 0, len - 1);
    }
};

const swap = function (arr, from, to) {
    const tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
};

const reverse = function (arr, start, end) {
    while (start < end) {
        swap(arr, start, end);
        start++;
        end--;
    }
};

const nums = [1,3,2]
nextPermutation(nums)
console.log(nums)