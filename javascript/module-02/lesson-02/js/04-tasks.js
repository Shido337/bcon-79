/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

let a = 100;
let b = 20;

if (a > b) {
  const temp = a;
  a = b;
  b = temp;
}

// for (let i = a; i < b; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

/**
 * Напиши цикл for, який виводить у консоль браузера
 * число в діапазоні від a1 до b1, але тільки якщо число кратне 5.
 */

let a1 = 100;
let b1 = 21;

// console.log("Before", a1);
// console.log("Before", b1);

// function viceversa(a, b) {
//   if (a > b) {
//     const temp = a1; // 100
//     a1 = b1;
//     b1 = temp;
//   }
// }
// viceversa(a1, b1);

// console.log("After", a1);
// console.log("After", b1);

for (let k = a1; k < b1; k++) {
  if (k % 5 === 0) {
    // console.log("🚀 ~ k:", k);
    break;
  }

  // console.log(k);
}

function findFirstNum(min, max, num = 5) {
  let findNumber = 0;

  for (let i = min; i <= max; i++) {
    if (i % num === 0) {
      // findNumber = i;
      // break;
      return i;
    }
  }

  console.log("After for");

  return Math.pow(findNumber, 2);
}

// const res = findFirstNum(11, 25, 5);
// console.log("🚀 ~ res:", res);

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5,
 * і в ньому два парних числа - 2 і 4, їх сума 6.
 */

const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i++) {
  // if (i % 2 === 0) {
  //   total += i;
  // }
  debugger;
  if (i % 2 !== 0) {
    continue;
  }

  total += i;
}

// console.log("🚀 ~ total:", total);
