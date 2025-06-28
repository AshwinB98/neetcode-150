/*
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Difficulty : Medium
 */

/*
Time Complexity : O(m)
Space Complexity : O(m + n)
 */

const inputArr = ["neet", "code", "love", "you"];

const encode = (strs) => {
  let result = "";
  for (let str of strs) {
    result += str.length + "#" + str;
  }
  return result;
};

const decode = (str) => {
  const result = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    let length = parseInt(str.substring(i, j));
    i = j + 1;
    j = i + length;
    result.push(str.substring(i, j));
    i = j;
  }
  return result;
};

const encodedStr = encode(inputArr);
decode(encodedStr);
