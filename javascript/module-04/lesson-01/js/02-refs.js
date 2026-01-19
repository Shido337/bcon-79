/**
 * Об'єкти
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

const objA = { x: 111, y: 222 };
const objB = objA;

// console.log("🚀 ~ objA:", objA);
objB.y = 555;
// console.log("🚀 ~ objB:", objB);
// console.log("🚀 ~ objA:", objA.y);

console.log(objA === objB);

const objC = { x: 777, y: 888 };
const objD = { x: 777, y: 888 };
console.log(objC === objD);

objC.x = 999;

// console.log("🚀 ~ objC:", objC);
// console.log("🚀 ~ objD:", objD);

/**
 * --------------------------
 */

const arr = [1, 2, 3];
arr.at(-1);

// arr["one"] = 999;
// arr[100] = 999;

// console.log("🚀 ~ arr:", arr);
// console.log("🚀 ~ arr:", arr["one"]);

function foo() {
  console.log("hello");
}

// foo.id = "123";
// console.dir(foo);
// console.log("🚀 ~ foo:", foo.id);

const number = 5;
// const number1 = new Number(5);
