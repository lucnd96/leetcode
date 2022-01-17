/**
 * @param {number[]} array
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(array, target) {
    array.sort((a,b) => a - b);
    let result = array[0] + array[1] + array[2];
    let current = Math.abs(target - result)
    for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;
        if (array[i] === array[i-1]) {
            continue
        }
        while (left < right) {
            const sum = array[i] + array[left] + array[right]
            const diff = Math.abs(sum - target)
            if (diff < current) {
                current = diff
                result = sum
            }
            if (sum === target) {
                return sum
            } else if(sum < target) {
                while (array[left] === array[left + 1]) {
                    left ++
                }
                left ++
            } else {
                while (array[right] === array[right - 1]) {
                    right --
                }
                right --
            }
        }
    }
    return result
};
console.log(threeSumClosest([0,0,0], 1))