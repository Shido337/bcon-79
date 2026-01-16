/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(items = []) {
  // console.log(items);
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names = "", phones = "") {
  // let names
  // let phones
  names = names.split(",");
  phones = phones.split(",");

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const phone = phones[i];

    console.log(`${i + 1}: ${name} - ${phone}`);
  }
}

// printInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */
// const totalMinutes = 125;
// const hours = Math.floor(totalMinutes / 60);
// console.log("🚀 ~ hours:", hours);
// const minutes = totalMinutes % 60;
// console.log("🚀 ~ minutes:", minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const normalizeHours = doubleDigits(hours);
  const normalizeMinutes = doubleDigits(minutes);

  return `${normalizeHours}:${normalizeMinutes}`;
}

function doubleDigits(num) {
  return String(num).padStart(2, 0);
}

// const time1 = formatTime(70); // "01:10"
// console.log("🚀 ~ time1:", time1);
// const time2 = formatTime(450); // "07:30"
// console.log("🚀 ~ time2:", time2);
// const time3 = formatTime(1441); // "24:01"
// console.log("🚀 ~ time3:", time3);

const btnEl = document.querySelector(".js-btn");
const inputEl = document.querySelector(".js-form-control");
const outputEl = document.querySelector(".js-output");
const toastEl = document.querySelector(".js-toast");

btnEl.onclick = function () {
  const totalMinutes = inputEl.value.trim();
  if (totalMinutes.length === 0) {
    // console.log("Введіть кількість хвилин в діапазоні від 0 до 2000");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastEl);
    toastBootstrap.show();

    inputEl.value = "";
    return;
  }

  const formattedTime = formatTime(+totalMinutes);
  outputEl.children[0].textContent = formattedTime;
};
