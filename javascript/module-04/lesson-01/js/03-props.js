/**
 * Об'єкти
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const username = "Mango";
const email = "mango@mail.com";

const credentials = {
  // Shorthand properties
  username,
  email,
  // username: username,
  // email: email,
};

// credentials.username = username;
// credentials.email = email;

// console.log("🚀 ~ credentials:", credentials);
// console.log("🚀 ~ credentials:", credentials.username);
// console.log("🚀 ~ credentials:", credentials.email);

/**
 * -------------------------
 */

const inputName = "color";

const colorPickerData = {};

colorPicker.onchange = getColor;

console.log(colorPickerData[inputName]);

function getColor() {
  const colorValue = colorPicker.value;
  // console.log("🚀 ~ getColor ~ colorValue:", colorValue);

  colorPickerData[inputName] = colorValue;

  // console.log("🚀 ~ colorPickerData:", colorPickerData);
}

// console.log("🚀 ~ colorPickerData:", colorPickerData);

currentColor.onclick = showCurrentColor;

function showCurrentColor() {
  if (colorPickerData[inputName]) {
    output.children[0].innerHTML = colorPickerData[inputName];
    output.style.backgroundColor = colorPickerData[inputName];
  }
}

// Обчислювані властивості на прикладі обʼєкта телефону

const phone = {
  model: "iPhone 13",
  storage: "128 Gb",
  color: "white",
};

const inputGroup = document.querySelectorAll("input[name='phoneProps']");
console.log("🚀 ~ inputGroup:", inputGroup);

for (const input of inputGroup) {
  input.onchange = getPropValue;
}

function getPropValue(event) {
  const propName = event.target.value;
  const prop = phone[propName];
  console.log("🚀 ~ getPropValue ~ prop:", prop);
  outputValue.textContent = prop;
}
