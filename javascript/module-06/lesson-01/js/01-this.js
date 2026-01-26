// "use strict";
/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */
// function foo() {
//   console.log("foo -> this", this);
// }

// foo();

/**
 * Контекст методу об'єкта
 */

const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> tag:", this.tag);
  },
};

// user.showTag();

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

function showTag() {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
}

// showTag();

const mango = {
  tag: "Mango",
};

const ajax = {
  tag: "Ajax",
};

mango.showUserTag = showTag;
ajax.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();
// ajax.showUserTag();

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

const poly = {
  tag: "Poly",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

// poly.showTag();

const outerShowTag = poly.showTag;

// outerShowTag();

/**
 * Контекст у callback-функціях
 */

const jacob = {
  tag: "Jacob",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

const john = {
  tag: "John",
};

//! Так робити не можна. Якщо вже і змінюється оригінальна функція
//! на те є ДУЖЕ вагомі причини
// jacob.showTag = function (params) {
//   console.warn("Another function: rewrite original show tag");
// };

john.showJohnTag = jacob.showTag;
john.showJohnTag();

function invokeAction(action) {
  // console.log(action);
  action();
}

// invokeAction(jacob.showTag);
