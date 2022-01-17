/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const LEFTS = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)
        if (LEFTS[char]) {
            stack.push(char)
        } else if (LEFTS[stack.pop()] !== char) {
            return false
        }
    }
    return stack.length === 0
};
console.log(isValid("[{}]"))