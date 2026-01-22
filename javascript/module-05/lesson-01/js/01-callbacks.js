/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

function fnA(message, callback) {
  console.log(message);
  callback(111);

  return 111;
}

function fnB(number) {
  console.log("Log during fnB execution ", number);
}

// fnA("A message");
// fnA("A message", fnB);

/**
 * Функція calc(a, b, callback)
 */
// const res1 = calc(2, 3, function (a, b) {
//   return a * b;
// });
const res1 = calc(2, 3, mult);
console.log("🚀 ~ res1:", res1);

const res2 = calc(10, 8, substr);
console.log("🚀 ~ res2:", res2);

function mult(a, b) {
  return a * b;
}
function substr(a, b) {
  return a - b;
}
function calc(a, b, callback) {
  const result = callback(a, b);
  output.children[0].textContent = result;

  return result;
}

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */
//! HOF - Higher order function
function each(array, callback) {
  const arr = [];

  for (const item of array) {
    const res = callback(item);
    arr.push(res);
  }

  return arr;
}

const res3 = each([64, 49, 36, 25, 16], function (value) {
  return value * 2;
});
console.log("🚀 ~ res3:", [64, 49, 36, 25, 16], res3);

const res4 = each([64, 49, 36, 25, 16], function (value) {
  return value - 10;
});
console.log("🚀 ~ res4:", res4);

const res5 = each([64, 49, 36, 25, 16], function (value) {
  return Math.sqrt(value);
});
console.log("🚀 ~ res5:", res5);

const res6 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.ceil(value);
});
console.log("🚀 ~ res6:", res6);

const res7 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.floor(value);
});
console.log("🚀 ~ res7:", res7);
