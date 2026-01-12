/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

const hours = 14;
const minutes = 0;
let timestring;

// if (minutes === 0) {
//   timestring = `${hours} г.`;
// } else {
//   timestring = `${hours} г. ${minutes} хв.`;
// }

timestring = `${hours} г. ${minutes === 0 ? "" : `${minutes} хв.`}`;

// console.log("🚀 ~ timestring:", timestring);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй else...if
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 0;
let message;

if (daysUntilDeadline === 0) {
  message = "Today";
} else if (daysUntilDeadline === 1) {
  message = "Tomorrow";
} else if (daysUntilDeadline === 2) {
  message = "Overmorrow";
} else {
  message = "Date in the future";
}

console.log("🚀 ~ message:", message);
