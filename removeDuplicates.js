/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = {}
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            result.push(nums[i])
            map[nums[i]] = true
        }
    }
    return result.length
};
console.log(removeDuplicates([1,1,2]))