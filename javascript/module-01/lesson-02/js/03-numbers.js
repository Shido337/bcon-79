/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
// console.log("elementWidth: ", elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
// console.log("elementHeight: ", elementHeight);

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

const value = 27.9;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

const temps = [-1, -10, 20, 10, -18];

// const minTemp = Math.min(...temps);
// console.log("🚀 ~ minTemp:", minTemp);
// const maxTemp = Math.max(-1, -10, 20, 10, -18);
// console.log("🚀 ~ maxTemp:", maxTemp);
