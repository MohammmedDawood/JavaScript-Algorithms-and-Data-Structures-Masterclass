// Problem solving method
// 1. Understand the problem
// Can I restate the problem in my own words?
// What are the inputs that go into the problem?
// What are the outputs that should come from the solution to the problem?
// Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
// How should I label the important pieces of data that are a part of the problem?

// 2. Explore concrete examples
// Start with simple examples
// Progress to more complex examples
// Explore examples with empty inputs
// Explore examples with invalid inputs

// 3. Break it down
// Explicitly write out the steps you need to take
// function charCounter(str){
//1. loop over string, for each character...
//2. if the char is a number/letter AND is a key in object, add one to count
//3. if the char is a number/letter AND not in object, add it and set value to 1
//4. if character is something else (space, period, etc.) don't do anything
//5. return object at end
// }

// 4. Solve/Simplify
// Find the core difficulty in what you're trying to do
// Temporarily ignore that difficulty
// Write a simplified solution
// Then incorporate that difficulty back in

// 5. Look back and refactor
// Can you check the result?
// Can you derive the result differently?
// Can you understand it at a glance?
// Can you use the result or method for some other problem?
// Can you improve the performance of your solution?
// Can you think of other ways to refactor?
// How have other people solved this problem?

// function charCounter(str) {
//   //1. make an object to return at end
//   let result = {};
//   //2. loop over string, for each character...
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     //2.3 if character is something else (space, period, etc.) don't do anything
//     if (/[a-z0-9]/.test(char)) {
//       //2.1 if the char is a number/letter AND is a key in object, add one to count
//       if (result[char] > 0) {
//         result[char]++;
//       }
//       //2.2 if the char is a number/letter AND not in object, add it and set value to 1
//       else {
//         result[char] = 1;
//       }
//     }
//   }
//   //3. return object at end
//   return result;
// }

// refactor 1
// function charCounter(str) {
//   let result = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       result[char] = ++result[char] || 1;
//     }
//   }
//   return result;
// }

// refactor 2
// faster than the using regex
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

function charCounter(str) {
  let result = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

console.log(charCounter("Hello"));
console.log(charCounter("Hi There!"));
