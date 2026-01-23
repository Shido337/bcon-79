/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3, 11, 12, 22, 34, "14px", "32.5"];

const sorted = numbers.toSorted((curr, next) => curr - next);
// console.log("sorted ", sorted);

const letters = ["b", "B", "a", "A"];
const sortedLetter = letters.toSorted((a, b) => b.localeCompare(a));
// console.log("letters", sortedLetter);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */
const descSortedNumbers = numbers.toSorted((a, b) => {
  a = Number.parseFloat(a);
  b = Number.parseFloat(b);

  return b - a;
});
// console.log("descSortedNumbers", descSortedNumbers);

const ascSortedNumbers = numbers.toSorted((a, b) => {
  a = Number.parseFloat(a);
  b = Number.parseFloat(b);

  return a - b;
});
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

console.table(players);

// За ігровим часом
const sortedByBestPlayers = players.toSorted((a, b) => {
  return b.timePlayed - a.timePlayed;
});
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted((a, b) => {
  return a.timePlayed - b.timePlayed;
});
// console.table(sortedByWorstPlayers);

// Сортування булевих значень
// const byOnlineStatus = players.toSorted((currPlayer, nextPlayer) => {
//   return nextPlayer.online - currPlayer.online;
// });
// console.log("🚀 ~ byOnlineStatus:", byOnlineStatus);

// По першій літері имені
const byName = players.toSorted((currPlayer, nextPlayer) => {
  // return currPlayer.name[0].localeCompare(nextPlayer.name[0]);
  return nextPlayer.name[0].localeCompare(currPlayer.name[0]);
});
// console.table(byName);
