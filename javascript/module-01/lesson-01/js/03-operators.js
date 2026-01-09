/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

const a = 11;
const b = 5;

const res1 = a - b;
// console.log("🚀 ~ res1:", res1);

const res2 = a + b;
// console.log("🚀 ~ res2:", res2);

const res3 = a * b;
// console.log("🚀 ~ res3:", res3);

const res4 = a / b;
// console.log("🚀 ~ res4:", res4);

const res5 = b % a;
// console.log("🚀 ~ res5:", res5);

const minutes = 70;

const hoursRemain = Math.floor(minutes / 60);
// console.log("🚀 ~ hoursRemain:", hoursRemain);
const minutesRemain = minutes % 60;
// console.log("🚀 ~ minutesRemain:", minutesRemain);

const time = `${hoursRemain}:${minutesRemain}`;
// console.log("🚀 ~ time:", time);

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

const totalFruits = apples + grapes;
// console.log("🚀 ~ totalFruits:", totalFruits);

const subsFruits = apples - grapes;
// console.log("🚀 ~ subsFruits:", subsFruits);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
// students = students + 50;
students += 50;
// console.log(students);

let base = 2;

base **= 4;

// console.log("🚀 ~ base:", base);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

const result = 108 + (223 - 2 + 12) * 5;
// console.log(result);

function capitalizeName(name) {
  // let name = undefined
  const updateName = name.slice(0, 1).toUpperCase() + name.slice(1);

  return updateName;
  // return undefined ❌
}

// const promptResult = prompt("What is your name?");

// let result1 = capitalizeName(promptResult); // return undefined
// console.log("🚀 ~ result1:", result1);

// const greet = `Hello ${result1}`;

// text.textContent = greet;
let totalClicks = 0;

function updateClicks() {
  const [count] = clicks.children;
  totalClicks += 3;
  // ++totalClicks;
  count.textContent = totalClicks;

  // return undefined
}

clicks.onclick = updateClicks;

// CSS Selectors
// 1. class
// 2. id
// 3. tag name
// 4. attribute selector input[type="text"]
