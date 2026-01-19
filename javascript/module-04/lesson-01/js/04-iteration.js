/**
 * Перебір об'єкта
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const feddbackArr = [5, 10, 3];

let totalFeedback = 0;

// console.log("good" in feedback);

// for (const key in feedback) {
// console.log(key);

//   const feedbackValue = feedback[key];
// console.log(feedbackValue);

//   totalFeedback += feedbackValue;
// }

// console.log("totalFeedback: ", totalFeedback);

/**
 * ---------------------------------
 */
const keys = Object.keys(feedback);
// console.log("🚀 ~ keys:", keys);

for (const key of keys) {
  // console.log(feedback[key]);
  // totalFeedback += feedback[key];
}

// console.log("totalFeedback: ", totalFeedback);

const values = Object.values(feedback);
// console.log(values);

for (const value of values) {
  totalFeedback += value;
}

// console.log("totalFeedback: ", totalFeedback);

const entries = Object.entries(feedback);
console.log("🚀 ~ entries:", entries);

const obj = Object.fromEntries(entries);
console.log("🚀 ~ obj:", obj);

// Обробка форми
reviewForm.onsubmit = onFormSubmit;

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  // console.log("🚀 ~ onFormSubmit ~ form:", form);
  const formData = Object.fromEntries(new FormData(form));
  console.log("🚀 ~ onFormSubmit ~ formData:", formData);

  // for (const [key, value] of formData) {
  //   console.log("🚀 ~ onFormSubmit:", key);
  //   console.log("🚀 ~ onFormSubmit:", value);
  // }
}
