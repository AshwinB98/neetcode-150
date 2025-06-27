//find if any duplicates in the array
//Time complexity : O(n)
//Space complexity : O(n)

//Solution: HashSet

const arr = [1, 2, 3, 4, 1];

const findDuplicate = (arr) => {
  const result = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (result.has(arr[i])) {
      return true;
    } else {
      result.add(arr[i]);
    }
  }
  return false;
};

console.log(findDuplicate(arr));
