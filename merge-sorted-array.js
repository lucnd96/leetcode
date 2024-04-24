/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    return;
  }
  if (m === 0) {
    nums2.forEach((e, i) => {
      nums1[i] = e;
    });
    return;
  }
  let r = [];
  let k1 = 0,
    k2 = 0;
  while (k1 <= m || k2 <= n) {
    if ((k1 < m && nums1[k1] < nums2[k2]) || k2 >= n) {
      r.push(nums1[k1]);
      k1++;
    } else {
      r.push(nums2[k2]);
      k2++;
    }
  }
  r.forEach((e, i) => {
    nums1[i] = e;
  });
};
