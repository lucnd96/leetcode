/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const arr = x.toString().split('');
  const n = arr.length;
  let j = n - 1;
  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    if (i >= j) {
      break;
    }
    j--;
  }
  return true;
};
