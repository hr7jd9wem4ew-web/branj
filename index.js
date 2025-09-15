// -------------Завдання 1----------------

// const num = function (a, b) {
//   switch (true) {
//     case a < b:
//       return -1;
//     case a > b:
//       return 1;
//     default:
//       return 0;
//   }
// }

// -------------Завдання 2----------------

// const num1 = function (n) {
//   if (n < 0) {
//     return "Від'ємне число";
//   }
//   let num2 = 1;
//   for (let i = 1; i <= n; i++) {
//     num2 *= i;
//   }
//   return num2;
// }

// -------------Завдання 3----------------

// const num = function (a, b, c) {
//   return a * 100 + b * 10 + c;
// }

// -------------Завдання 4----------------

// const num = function (a, b) {
//     if (b === undefined) {
//         b = a;
//     }
//     return a * b;
// }

// -------------Завдання 5----------------

// const num = function (n) {
//     if (n < 1) return false;
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//         if (n % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === n;
// }

// -------------Завдання 6----------------

// const num = function (n) {
//     if (n < 1) return false;
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//         if (n % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === n;
// }

// const range = function (min, max) {
//     let result = [];
//     for (let i = min; i <= max; i++) {
//         if (num(i)) {
//             result.push(i);
//         }
//     }
//     return result;
// }