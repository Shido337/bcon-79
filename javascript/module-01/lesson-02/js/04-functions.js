/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// let totalClicks = 0;

// btn.onclick = countClicks;

// Function declaration -> hoisting
// function countClicks() {
//   totalClicks += 1;
//   renderResult();
// }

// function renderResult() {
//   output.textContent = totalClicks;
// }

function add(a, b) {
  // let a = 22
  // let b = 33

  // const result = a + b;

  return a + b;
  // return undefined;
}

const res1 = add(2, 3); // 5
// console.log("🚀 ~ res1:", res1);
const res2 = add(22, 33); // 55
// console.log("🚀 ~ res2:", res2);

// debugger;
// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// // fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// // fnC();
// console.log("After fnC execution");

// function fnA() {
//   console.log("Inside fnA function");
//   fnB();
// }
// function fnB() {
//   console.log("Inside fnB function");
//   fnC();
// }
// function fnC() {
//   console.log("Inside fnC function");
// }

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8

function calcBMI(weight, height) {
  // let normalizeWeight = weight.replace(",", ".");
  // let normalizeHeight = height.replace(",", ".");

  // normalizeWeight = Number.parseFloat(normalizeWeight);
  // normalizeHeight = Number.parseFloat(normalizeHeight);

  let normalizeWeight = normalizeValue(weight);
  let normalizeHeight = normalizeValue(height);

  const bmi = normalizeWeight / normalizeHeight ** 2;

  // return Math.round(bmi * 10) / 10;
  return bmi.toFixed(1);
}

function normalizeValue(value) {
  value = value.replace(",", ".");

  if (Number.isNaN(value)) {
    return value;
  }

  return Number.parseFloat(value);
}
