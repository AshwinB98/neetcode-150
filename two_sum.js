//In a array, sum of two numbers have to be equal to target element
//Time complexity : O(n)
//Space complexity : O(n)
//solution : HashSet
const arr = [1, 2, 3, 4];
const target = 7;

const findTwoSum = (arr, tar) => {
  const hashSet = {};
  for (let i = 0; i < arr.length; i++) {
    const targetNeeded = tar - arr[i];
    if (targetNeeded in hashSet) {
      return [hashSet[targetNeeded], i];
    } else {
      hashSet[arr[i]] = i;
    }
  }
};

findTwoSum(arr, target);
