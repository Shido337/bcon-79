/**
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */
const x = "Mango";
const y = x;

// console.log("🚀 ~ x === y:", x === y);

const a = [1, 2, 3];
const b = a;

console.log("a", a);
console.log("b", b);

a[0] = 555;
b[2] = 444;

console.log("a", a);
console.log("b", b);

console.log(a === b);

// console.log([] === []);
// console.log([1, 2, 3] === [1, 2, 3]);
