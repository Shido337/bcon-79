/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false

// console.log(Boolean(true)); // true
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true

/**
 * --------------------------------
 */

// 1. Boolean(5) -> true
// 2. Boolean(4) -> true
// console.log(5 && 4); // 4
// console.log(0 && "mango");

/**
 * --------------------------------
 */

// console.log(false || 5);

//? 1. Boolean('') -> false
//? 2. Boolean(0)  -> false
//? 3. Boolean(null) -> false

// console.log("" || 0 || null);

//? 1. Boolean('qwe') -> true
//? 2. Boolean(null) -> false
//? 3. Boolean(5) -> true

// console.log("qwe" && null && 5);

/**
 * --------------------------------
 */

// console.log(!5);
// console.log(!false);
// console.log(!true);

/**
 * --------------------------------
 */

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && "kiwi"); // kiwi

// console.log(true && 0 && "kiwi"); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // false

// console.log(null || (2 && 3) || 4); // 3
