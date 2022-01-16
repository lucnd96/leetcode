/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
    if (nums.length <= 1) {
        return;
    }
    let k = null;
    let m = null;
    const getNext = (start, offset) => {
        let next = start;
        for (let i = start + 1; i < nums.length; i++) {
            if (nums[i] < nums[start] && nums[i] > offset) {
                next = i;
            }
        }
        return next;
    }
    for (let i = nums.length - 1; i >= 1; i--) {
        if (nums[i] > nums[i - 1]) {
            m = i - 1;
            k = getNext(i, nums[i-1]);
            const tmp = nums[i-1]
            nums[i-1] = nums[k];
            nums[k] = tmp;
            break
        }
    }
    if (m === null) {
        nums = nums.sort((a,b) => a - b)
    }
    if (m < nums.length - 2) {
        const s = nums.slice(m+1).sort((a,b) => a - b);
        for (let i = 0; i < s.length; i++) {
            nums[m+1+i] = s[i];
        }
    }
};