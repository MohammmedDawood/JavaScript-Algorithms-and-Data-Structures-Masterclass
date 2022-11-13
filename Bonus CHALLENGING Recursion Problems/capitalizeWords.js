// capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

// function capitalizeWords(arr) {
//   if (arr.length === 0) return [];
//   return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
// }

//solution

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

let words = ["i", "am", "learning", "recursion"];

console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
