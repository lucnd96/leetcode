/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const number = Number(Math.abs(x).toString().split('').reverse().join(''));
  if (number > 0x7fffffff) {
    return 0;
  }
  return x > 0 ? number : number * -1;
};
console.log(reverse(1534236469));
