/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

const total = 5.91;
const cost = 1_000_000;
// console.log("🚀 ~ cost:", cost);

let totalPrice = null;

// const userAge = prompt("Enter your age");
// console.log("🚀 ~ userAge:", userAge);
// console.log("🚀 ~ userAge:", Number(userAge));
// const age = Number(userAge);
// if (Number.isNaN(age)) {
//   alert("Please enter number ⚠️");
// }

// const value = Number(undefined);

// const res = Number.isNaN(value);
// console.log("🚀 ~ res:", res);

// console.log(Number("5")); // 5

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number("Jacob")); // NaN
// console.log(Number("25px")); // NaN

// console.log("5" * 2); // 10
// console.log("10" - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4

const res1 = (null - 5 + "10") / false; // 1   5     -510     NaN
// console.log("🚀 ~ res1:", res1);

//? 1. 0 - 5 = -5
//? 2. -5 + "10" = "-510"
//? 3. -510 / 1 = -510
