// "use strict";
// var SILVER_MEMBER_DISCOUNT = undefined;
// var GOLD_MEMBER_DISCOUNT = undefined;
/**
 * Змінні та типи даних
 *
 * - Оголошення змінних з let і const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Числа, рядки, булі, null, undefined
 * - Оператор typeof
 */

// const dictionary = {
//   literal: "Lorem",
// };

// const text = "I" + " " + "love" + " " + "JavaScript";
// const isModalOpen = false;

// const employee = "Mango";
// console.log("🚀 ~ employee:", employee);

// const employeeStatus = "hired";
// const employeePosition = "manager";
// let employeeSalary = null;

// let age; // undefined
// console.log("🚀 ~ age:", age);

// p.textContent = text;

// let num = 5;
// num = 10;
// console.log("🚀 ~ num:", num);

// let totalPrice = 0;

// const discount = 0.1; // 10%
// const price = 100;

// totalPrice = price - price * discount;
// totalPrice = price * (1 - discount);

// console.log("🚀 ~ totalPrice:", totalPrice);

// console.log(SILVER_MEMBER_DISCOUNT);

// const finalPrice = price * (1 - SILVER_MEMBER_DISCOUNT); // 95$ -> NaN
// console.log("🚀 ~ finalPrice:", finalPrice);

//! HOISTING

// TODO: система знижок
// var SILVER_MEMBER_DISCOUNT = 0.05; //"5%"
// {
//   var GOLD_MEMBER_DISCOUNT = 0.07;
//   console.log(finalPrice);
// } // "7%"
// const PLATINUM_MEMBER_DISCOUNT = 0.15; // "15%"

// var GOLD_MEMBER_DISCOUNT = 0.5;

// console.log(window);
// alert("Are you sure?");

// const userAnswer = confirm("Do you agree with Privacy policy");
// console.log("🚀 ~ userAnswer:", userAnswer);

const result = prompt("Enter you age");
console.log("🚀 ~ result:", result);
console.log("🚀 ~ result:", typeof result);

// Type guard
if (typeof result === "string") {
  const age = Number(result);
  console.log(age);
  console.log(typeof age);
}
if (typeof result === "object") {
}
if (typeof result === "number") {
}
