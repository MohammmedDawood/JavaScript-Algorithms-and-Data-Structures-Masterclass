// check this link for more information about the function timer perormance tracker
// https://rithmschool.github.io/function-timer-demo/

//  O(n^2) - Polynomial Time
const printAllPairs = function (n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

printAllPairs(5);
// performance of the function
let t1 = performance.now();
printAllPairs(5);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
