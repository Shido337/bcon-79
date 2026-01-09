/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

const firstName = "Chelsy Carters";
const lastName = "Emerald";
// console.log(fullName);

const updFirstname = firstName.replace("C", "c");

const words = firstName.split(" ");
// console.log("🚀 ~ words:", words.length);

const strLength = firstName.length;
// console.log("🚀 ~ strLength:", strLength);

const isJSExtension = "index.css".endsWith(".js");
// console.log("🚀 ~ isJSExtension:", isJSExtension);

console.log(updFirstname);

const quantity = 15;
const orderMsg = `You ordered ${quantity} bots`;
// const orderMsg = "You ordered " + quantity + " bots";
console.log(orderMsg);

const message = "This string is 28 chars long";
console.log(message.length);

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;

// const totalBots = repairBots + defenceBots;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// const msg = `${companyName} has ${totalBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"

comment.oninput = checkCommentLength;

function checkCommentLength(event) {
  const textarea = event.target;
  const charsCount = textarea.value.length;

  // const sepIndex = counter.textContent.indexOf("/");
  // console.log(counter.textContent.indexOf("/"));

  counter.textContent = `${charsCount + counter.textContent.slice(-4)}`;
  // console.log("🚀 ~ charsCount:", charsCount);
}
