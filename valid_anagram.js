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

console.log(findAnagram(s, t));
