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
