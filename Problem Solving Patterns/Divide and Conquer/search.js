// Given a sorted array of integers, write a function
// called search, that accepts a value and returns the
// index where the value passed to the function is
// located. If the value is not found, return -1

// Naive Solution Linear Search
// Time Complexity - O(n)
// Space Complexity - O(1)
// function search(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// Refactored Solution Binary Search
// Time Complexity - O(log n)
// Space Complexity - O(1)
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    console.log(middle, currentElement);
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([0, 1, 2, 3, 4, 5, 6], 4)); // 3
// console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
