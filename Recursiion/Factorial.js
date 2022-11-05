function Factorial(num) {
  console.log(num);
  // Base case
  if (num === 1) return 1;
  return num * Factorial(num - 1);
}

console.log(Factorial(3)); // 6
console.log(Factorial(4)); // 24
console.log(Factorial(5)); // 120
console.log(Factorial(6)); // 720

// common problems with recursion
// pitfall: is base case isn't correct, you'll get a stack overflow error
// it fails is to forget to return the result of the recursive call
// stack overflow error
