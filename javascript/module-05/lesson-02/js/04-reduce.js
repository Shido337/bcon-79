/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];
const numbersMultByTwo = numbers.reduce((acc, number, index, array) => {
  acc.push(number * 2);
  return acc;
}, []);
// console.log(numbersMultByTwo);
// console.log(numbers === numbersMultByTwo);

const total = numbers.reduce((acc, number, index, array) => {
  //1. acc = 0 number = 5
  //2. acc = 5 number = 10
  //3. acc = 15 number = 15
  //4. acc = 30 number = 20
  //5. acc = 50 number = 25
  // return (acc += number);
  return (acc += number);

  // return undefined
}, 0);
// console.log("🚀 ~ total:", total);

const filteredNumbers = numbers.reduce((acc, number, index, array) => {
  if (number > 12) {
    acc.push(number);
  }

  return acc;
}, []);
// console.log("🚀 ~ filteredNumbers:", filteredNumbers);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (acc, salary) => (acc += salary),
  0
);
// console.log("🚀 ~ totalSalary:", totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((acc, player) => {
  return (acc += player.timePlayed);
}, 0);
// console.log("🚀 ~ totalTimePlayed:", totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((acc, item) => {
  return (acc += item.price * item.quantity);
}, 0);
console.log("🚀 ~ totalAmount:", totalAmount); // 840
