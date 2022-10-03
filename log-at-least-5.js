// big O is equal to the worst case scenario
// O(n) - Linear Time

// log at least
const logAtLeast5 = (n) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

// logAtLeast5(10);

// performance of the function
let t1 = performance.now();
logAtLeast5(10);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// log at most
// O(1) - Linear Time

// const logAtMost5 = (n) => {
//   for (let i = 1; i <= Math.min(5, n); i++) {
//     console.log(i);
//   }
// };

// // logAtMost5(10);

// // performance of the function
// let t1 = performance.now();
// logAtMost5(10000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
