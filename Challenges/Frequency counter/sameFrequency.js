// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Space: O(N)

function sameFrequency(num1, num2) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  if (num1Str.length !== num2Str.length) {
    return false;
  }
  let num1Obj = {};
  let num2Obj = {};
  for (let i = 0; i < num1Str.length; i++) {
    num1Obj[num1Str[i]] = (num1Obj[num1Str[i]] || 0) + 1;
  }
  for (let i = 0; i < num2Str.length; i++) {
    num2Obj[num2Str[i]] = (num2Obj[num2Str[i]] || 0) + 1;
  }
  for (let key in num1Obj) {
    if (num1Obj[key] !== num2Obj[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
