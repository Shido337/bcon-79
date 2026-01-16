/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

const globalValue = 10;

// console.log(globalValue); // 10

function foo() {
  const a = 20;
  // console.log("🚀 ~ foo ~ a:", a);
  // console.log("🚀 ~ globalValue:", globalValue);

  for (let i = 0; i < 5; i += 1) {
    // console.log("🚀 ~ foo ~ a:", a);
    // console.log("🚀 ~ globalValue:", globalValue);

    if (i === 2) {
      // debugger;
      console.log("🚀 ~ foo ~ a:", a);
      console.log("🚀 ~ globalValue:", globalValue);
      // console.log("🚀 ~ foo ~ superGlobalValue:", superGlobalValue);
    }
  }
}

foo();

// ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log("🚀 a:", a);

for (let i = 0; i < 3; i += 1) {
  // ❌ Помилка! Змінна a не доступна в цій області видимості
  // console.log("🚀 a:", a);
}
