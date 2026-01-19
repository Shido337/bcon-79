/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * додає поле mood зі значенням 'happy'
 * замінює значення hobby на 'skydiving'
 * замінює значення premium на false
 * виводить вміст об'єкта user у форматі ключ:значення
 * використовуючи Object.keys() та for...of
 */

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = !user.premium;
// user.premium = false;

// for (const key in user) {
//   const value = user[key];
//   console.log(`${key}: ${value}`);
// }

const keys = Object.keys(user);
// console.log("🚀 ~ keys:", keys);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const salaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130,
};

function calculateTotalSalary(salaries) {
  const salarieValues = Object.values(salaries);
  let sum = 0;

  if (salarieValues.length === 0) {
    return sum;
  }

  for (const salarie of salarieValues) {
    sum += salarie;
  }

  return sum;
}

const res = calculateTotalSalary(salaries);
console.log("🚀 ~ res:", res);
