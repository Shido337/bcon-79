/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for та for...of
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);
// for (let i = 0; i < friends.length; i += 1) {
//   const friend = friends[i];
//   // console.log("🚀 ~ friend:", friend);
// }

// const findFriend = "Everest";
const findFriend = "Kiwi";
let message = `Упс. Забули запросити друга ${findFriend}`;

// for (let i = 0; i < friends.length; i++) {
//   const friend = friends[i];

//   if (friend === findFriend) {
//     message = `${findFriend} запрошений на святкування дня народження`;
//     break;
//   }
// }

for (const friend of friends) {
  if (friend === findFriend) {
    message = `${findFriend} запрошений на святкування дня народження`;
    break;
  }
  // console.log(friend);
}

// console.log(message);

const numbers = [1, 3, 14, 18, 21, 34, 65];
const threshold = 15;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  // console.log("🚀 ~ number:", number);
  if (threshold > number) {
    continue;
  }

  // console.log(`Число більше за ${threshold}: ${number}`);
}

// Число більше за 15: 18
// Число більше за 15: 21
// Число більше за 15: 34
// Число більше за 15: 65

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = "8 11";
const sides = values.split(" ");

// for (let i = 0; i < sides.length; i += 1) {
//   sides[i] = +sides[i];
// }

for (const side of sides) {
  const currElIdx = sides.indexOf(side);
  // console.log("🚀 ~ currElIdx:", currElIdx);
  sides[currElIdx] = Number(side);
}
console.log("🚀 ~ sides:", sides);

const square = sides[0] * sides[1];
// console.log("🚀 ~ square:", square);

// const newSides = [];
// for (let side of sides) {
//   newSides.push(+side);
// }

// console.log("🚀 ~ newSides:", newSides);

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  // console.log("🚀 ~ i:", i);
  // console.log("🚀 ~ fruit:", fruit);

  console.log(`${i + 1}: ${fruit}`);
}
