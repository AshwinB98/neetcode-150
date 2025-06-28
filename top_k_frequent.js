/*
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
 */

/* 
Alogrithm : Bucket sort with count as index
Time Complexity : O(n)
Space Complexity : O(n)
*/

const nums = [1, 2, 3, 3, 4, 4, 4];
const k = 2;

const findTopKElements = (arr, k) => {
  if (k === nums.length) {
    return nums;
  }
  const hash = {};
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1;
  }
  for (const n in hash) {
    freq[hash[n]].push(parseInt(n));
  }
  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const num of freq[i]) {
      res.push(num);
      if (res.length === k) {
        return res;
      }
    }
  }
};

console.log(findTopKElements(nums, k));
