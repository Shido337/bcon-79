/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

// class User {
//   #login;
//   #email;

//   constructor(options) {
//     this.login = options.login;
//     this.email = options.email;
//   }

//   // get email() {
//   //   return this.#email;
//   // }
//   set email(value) {
//     if (value.includes("@")) {
//       this.#email = value;
//     }
//   }

//   // get login() {
//   //   return this.#login;
//   // }
//   set login(value) {
//     if (value.trim() !== "") {
//       this.#login = value;
//     }
//   }
// }

import User from "./User.js";

const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});
// console.log("🚀 ~ mango:", mango);

// console.log(mango.login); // Mango
mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge

const poly = new User({
  login: "Poly",
  email: "poly@mail.com",
});
// console.log("🚀 ~ poly:", poly);

// console.log(poly.login); // Poly
poly.login = "Polycutie";
// console.log(poly.login); // Polycutie
