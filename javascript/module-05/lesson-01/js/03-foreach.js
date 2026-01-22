/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

const numbers = [5, 10, 15, 20, 25];
let total = 0;

// function foreach(array, callback) {
//   for (const item of array) {
//     callback(item);
//   }
// }

//? Function declaration
// numbers.forEach(function (number) {
//   total += number;
// });
//? Arrow function
numbers.forEach(number => (total += number));

// console.log(total);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function logItems(items) {
  // console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
const names = ["Mango", "Poly", "Ajax"];
// console.log("🚀 ~ names:", names);

names.forEach((name, index, array) => {
  // array[index] = `${index + 1} - ${name}`;
});

names.forEach((item, i, arr) => {
  // console.log(`${i + 1} - ${item}`);
  // console.log(`${i + 1} - ${arr[i]}`);
});

// console.log("🚀 ~ names:", names);
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function printContactsInfo(data) {
  const nameList = data.names.split(",");
  const phoneList = data.phones.split(",");
  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }

  // nameList = ["Jacob", "William", "Solomon", "Artemis"];
  // phoneList = [89001234567, 89001112233, 890055566377, 890055566300];

  let output = "";

  nameList.forEach(
    (item, index, array) => (output += `${item}: ${phoneList[index]} \n`)
  );

  console.log(output);
}

printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function calculateAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}

const calcAverage = (...nums) => {
  let total = 0;
  nums.forEach(num => (total += num));
  return total / nums.length;
};

console.log("calculateAverage", calculateAverage(1, 2, 3, 4)); // 2.5
console.log("calcAverage", calcAverage(1, 2, 3, 4)); // 2.5
console.log("calcAverage", calcAverage(14, 8, 2)); // 8
console.log("calcAverage", calcAverage(27, 43, 2, 8, 36)); // 23.2
