/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Перевизначення
 */

// const names = ["Mango", "Poly", "Ajax"];
// console.log("🚀 ~ names:", names);
// const clients = Array(1, 2, 3);
// console.log("🚀 ~ clients:", clients);

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// console.log("🚀 ~ courses:", courses);

// courses[0]; // операція читання значення з масиву
// console.log("🚀 ~ courses[0]:", courses[0]);
// console.log("🚀 ~ courses[2]:", courses[2]);

// courses[1] = "SASS";
// console.log("🚀 ~ courses:", courses);

// courses = "couses";

// console.log(courses.length);
// courses.length = 0;
// console.log("🚀 ~ courses:", courses);

const courses = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PostgreSQL",
  "SQL",
  "Node.js",
];
console.table(courses);
// courses.length = 10;
// console.log(courses[8]);
const lastElemIndex = courses.length - 1;
// console.log("🚀 ~ lastElemIndex:", lastElemIndex);
// console.log("🚀 ~ courses[lastElemIndex]:", courses[lastElemIndex]);

// courses = "HTML";
