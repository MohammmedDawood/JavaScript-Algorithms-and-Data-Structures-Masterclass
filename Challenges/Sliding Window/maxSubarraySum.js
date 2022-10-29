// Sliding Window - maxSubarraySum
// Given an array of integers and a number,
// write a function called maxSubarraySum,
// which finds the maximum sum of a subarray
// with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements
//  from the original array. In the first example below,
//  [100, 200, 300] is a subarray of the original array,
//  but [100, 300] is not.

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

// maxSubarraySum Solution - Iterative
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

// // maxSubarraySum Solution - Recursive but not O(1) Space
// function maxSubarraySum(arr, num, maxSum = 0, tempSum = 0) {
//   if (arr.length < num) return null;
//   if (maxSum === 0) {
//     for (let i = 0; i < num; i++) {
//       maxSum += arr[i];
//     }
//     tempSum = maxSum;
//   }
//   if (arr.length === num) return maxSum;
//   tempSum = tempSum - arr[0] + arr[num];
//   maxSum = Math.max(maxSum, tempSum);
//   return maxSubarraySum(arr.slice(1), num, maxSum, tempSum);
// }

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null
