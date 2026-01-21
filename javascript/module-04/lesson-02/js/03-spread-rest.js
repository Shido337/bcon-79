/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

const numbers = [111, ...[11, 22, 33], 222, ...[55, 66, 77], 333];
// console.log(numbers);

/**
 * Пошук найменшої або найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];
const minTemp = Math.min(...temps);
// console.log("🚀 ~ minTemp:", minTemp);
const maxTemp = Math.max(...temps);
// console.log("🚀 ~ maxTemp:", maxTemp);
// console.log("🚀 ~ temps:", temps);

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1, f: [1, 2, 3] }, { y: 2 }, { z: 3 }];
const b = [...a];

const f = JSON.parse(JSON.stringify(a)); // Deep copy
// console.log("🚀 ~ f:", f);

const j = structuredClone(a);

a[0].x = 1000;

b[1] = { yy: 11 };
a[1].y = 2000;

b[2].d = 999;

// console.log("a", a);
// console.log("b", b);

// console.log("a === b", a === b);
// console.log("a === f", a === f);
// console.log("a === j", a === j);

const playlist = {
  title: "New playlist",
  rating: 5,

  updateRating(newRating) {
    this.rating = newRating;
  },
};

// const nextPlaylist = structuredClone(playlist);
// console.log("🚀 ~ nextPlaylist:", nextPlaylist);

/**
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
const allTemps = [...nextWeekTemps, ...currentTemps, ...lastWeekTemps];
// console.log(allTemps);

/**
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = { ...objA, ...objB };

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

// Збір залишкових параметрів в масив
function showInfo(a, b, ...args) {
  // arguments = [ 11, 22, "manog", "ajax", "poly" ]
  // console.log(arguments);

  console.log("🚀 ~ showInfo ~ a", a);
  console.log("🚀 ~ showInfo ~ b", b);
  console.log("🚀 ~ showInfo ~ args:", args);
}

showInfo(11, 22, "mango", "ajax", "poly");

// Збір усіх параметрів функції в масив
function calcTotalSalary(...args) {
  // arguments = [ 11, 22, 33, 44, 55, 66 ]
  console.log(args);
}
calcTotalSalary(11, 22, 33, 44, 55, 66);

function print(param1, param2, param3, param4 = 444, param5 = 555, ...args) {
  // param1, param2, param3 - обовʼязкові параметри
  // param4, param5 - опційні параметри
  // args = [11, 22, 33, 44, 55]
  // arguments = [111, 222, 333, 999, 888, 11, 22, 33, 44, 55]
  // this -> undefined (обʼєкт зліва від крапки)
  // return undefined
}

print(111, 222, 333, 999, 888, 11, 22, 33, 44, 55);
