/**
 * Псевдомасив arguments і Array.from
 */
// ? Function declaration
function fn(x, y) {
  // let x = undefined
  // let y = undefined
  // arguments = []
  //// ===========
  console.log(arguments);

  const args = Array.from(arguments);
  console.log(args);
  // const sum = arguments[0] + arguments[1];
  // const flattenedArray = args.flatMap(item => item);
  // console.log("🚀 ~ fn ~ flattenedArray:", flattenedArray);

  //// ===========
  // return undefined
}

// fn(1, 2, 3);
// fn("🍉", "🍊", "🍌", "🍋", "🍑");
// fn(["🍉", "🍊"], ["🍌", "🍋", "🍑"]);
// fn(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */
// ? Function expression
const add = function () {
  // const args = Array.from(arguments);
  // console.log("🚀 ~ add ~ args:", args);
  let total = 0;

  // for (const arg of args) {
  for (const arg of arguments) {
    total += arg;
  }

  return total;
};

// const res1 = add(1, 2, 3);
// console.log("🚀 ~ res1:", res1);
// const res2 = add(1, 2, 4, 5, 6);
// console.log("🚀 ~ res2:", res2);

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calAverage() {
  if (arguments.length === 0) {
    return 0;
  }

  let total = 0;
  for (const num of arguments) {
    total += num;
  }

  return total / arguments.length;
}

const res1 = calAverage(1, 2, 3, 4); // 2.5
// console.log("🚀 ~ res1:", res1);
const res2 = calAverage(14, 8, 2); // 8
// console.log("🚀 ~ res2:", res2);
const res3 = calAverage(27, 43, 2, 8, 36); // 23.2
// console.log("🚀 ~ res3:", res3);
const res4 = calAverage(); // 23.2
// console.log("🚀 ~ res4:", res4);
const res5 = calAverage(10); // 23.2
// console.log("🚀 ~ res5:", res5);

const superGlobalValue = 111;
