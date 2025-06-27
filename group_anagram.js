/*Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

 */

/* 
Time complexity : O(m * n)
Space complexity : O(m * n)
 */

const arr = ["act", "pots", "tops", "cat", "stop", "hat"];

const findGroupAnagrams = (arr) => {
  const result = {};
  for (let str of arr) {
    const totalChar = new Array(26).fill(0);
    for (let char of str) {
      totalChar[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const keys = totalChar.join("");
    if (!result[keys]) {
      result[keys] = [];
    }
    result[keys].push(str);
  }
  return Object.values(result);
};

findGroupAnagrams(arr);
