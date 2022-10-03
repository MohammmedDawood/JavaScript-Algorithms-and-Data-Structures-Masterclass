// check this link for more information about the function timer perormance tracker
// https://rithmschool.github.io/function-timer-demo/

// add up to n slowly perform 5n+2 operations O(n)
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// add up to n quickly perform 3 operations constantly O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(6));

// performance of the function
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
