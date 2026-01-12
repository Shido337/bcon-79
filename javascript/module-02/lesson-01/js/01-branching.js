/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

const userEmail = "mango@mail.com";
const userPassword = "123123123";

// console.log("Before");

function checkUserStatus(email, password) {
  if (email.length === 0 || !email.includes("@") || !email.endsWith(".com")) {
    alert("Empty email filed. Please fill input");
    return;
  }
  if (password.length <= 8) {
    alert("Password too short");
    return;
  }

  return "User status checked: ✅";
}

// const result = checkUserStatus(userEmail, userPassword);
// console.log("🚀 ~ result:", result);

// console.log("After");

// if (65 > 30) {
//   console.log("x > y");
// } else {
//   console.log("x < y");
// }

/**
 * -----------------------------
 */
const points = 5505;

const arrFn = points => {
  if (points <= 500) {
    console.log("Level 1");
  } else if (points < 1000) {
    console.log("Level 2");
  } else if (points < 1500) {
    console.log("Level 3");
  } else if (points < 2000) {
    console.log("Level 4");
  } else {
    console.log("Level 5");
  }
};

// points <= 500
//   ? console.log("Level 1")
//   : points < 1000
//   ? console.log("Level 2")
//   : points < 1500
//   ? console.log("Level 3")
//   : points < 2000
//   ? console.log("Level 4")
//   : console.log("Level 5");

// arrFn(100);

/**
 * -----------------------------
 */
const balance = -1000;
// let message;

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   message = "Negative";
// }

function positiveResult() {
  alert("Positive Balance");

  // return undefined
}
function negativeResult() {
  alert("Negative Balance");

  // return undefined
}

const message = balance >= 0 ? "Positive" : "Negative";
// const message = balance >= 0 ? positiveResult() : negativeResult();
console.log(message);
