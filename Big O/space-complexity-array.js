function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([1, 2, 3, 4, 5]));

// performance
// space Complexity: O(1)
// time Complexity: O(n)

function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

console.log(doubleArrayValues([1, 2, 3]));

// performance
// space Complexity: O(n)
// time Complexity: O(n)
