//Finding anagram where the letters can be arranged differently
//Time complexity : O(n + m)
//Space complexity : O(1)

//solution : Using Hashset
const s = "jara";
const t = "ajra";

const findAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const sObj = {};
  const tObj = {};
  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = (sObj[s[i]] || 0) + 1;
    tObj[t[i]] = (tObj[t[i]] || 0) + 1;
  }
  for (let key of Object.keys(sObj)) {
    if (sObj[key] !== tObj[key]) {
      return false;
    }
  }
  return true;
};

//Using Hashset and charCode
const findAnagram2 = (s, t) => {
  if (s.length !== t.length) return false;
  const charArr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    charArr[s.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    charArr[t.charCodeAt(i) - "a".charCodeAt(0)] -= 1;
  }
  return charArr.every((val) => val === 0);
};

findAnagram(s, t);
findAnagram2(s, t);
