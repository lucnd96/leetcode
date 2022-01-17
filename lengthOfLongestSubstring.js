/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let arr = s.split("");
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = 0;
        let map = {};
        for(let j = i; j < arr.length; j++) {
            if (!map[arr[j]]) {
                current ++
                map[arr[j]] = true
            } else {
                break
            }
        }
        if (current > max) {
            max = current;
        }
    }
    return max
};
console.log(lengthOfLongestSubstring("abcabcbb"))