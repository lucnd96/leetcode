function getPrefixOfTwoString(str1, str2) {
    let result = ""
    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) !== str2.charAt(i)) {
            return result
        }
        result += str1.charAt(i)
    }
    return result
}
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length < 1) {
        return ""
    } else if (strs.length === 1) {
        return strs[0]
    }
    let result = strs[0]
    for (let i = 0; i < strs.length; i++) {
        result = getPrefixOfTwoString(result, strs[i])
    }
    return result
};
