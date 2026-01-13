/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотній відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// console.log("Before");

// for (let i = 0; i <= 10; i++) {
// console.log(i);
// Step 1
// i = 0
// i < 10 -> true
// 0
// 0++ -> 0
// 1 < 10
// }

// console.log("After");

/**
 * -------------------------------
 */

// console.log("Before");

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// console.log("After");

/**
 * -------------------------------
 */

let a = 10;
let start = 3;
let end = 17;

let x = 0;
// Prefix increment
// console.log("🚀 ~ x:", ++x);

// Postfix increment
// console.log("🚀 ~ x:", x++);
// console.log("🚀 ~ x:", x);

let y = 10;
// Prefix decrement
// console.log("🚀 ~ y:", --y);

// Postfix decrement
// console.log("🚀 ~ y:", y--);
// console.log("🚀 ~ y:", y);

// if (!start % 2 === 0) {
//   start += 1;
// }

// for (let i = start; i <= end; i += 2) {
//   console.log(i);
// }

// if (!end % 2 === 0) {
//   end -= 1;
// }

for (let i = end; i >= start; i -= 2) {
  // console.log(i);
}

// console.log(a);
// console.log(b);

/**
 * -------------------------------
 */

// console.log("Before while loop");

// let counter = 0;

// while (counter > 10) {
//   debugger;
//   console.log(counter);
//   counter++;
// }

// console.log("After while loop");
let answer = null;
let counter = 0;
// do {
//   answer = +prompt("Guess number");

//   if (answer === 5 && !Number.isNaN(answer)) {
//     console.log("You win ✨");
//     answer = null;
//   } else {
//     answer = 1;
//     counter += 1;
//   }
// } while (answer && counter < 5);
