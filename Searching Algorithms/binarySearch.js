// Write a function called binarySearch which accepts a
// sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.

// This algorithm should be more efficient than linearSearch
// complexity: O(log n) worst and average case
// complexity: O(1) best case (if the value is in the middle)

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)); // -1
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3
