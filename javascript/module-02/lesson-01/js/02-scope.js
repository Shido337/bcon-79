/**
 * Блокова область видимості змінних
 */
const c = 444;

if (true) {
  const a = 222;
  const c = 111;
  console.log("🚀 ~ a:", a);
  // console.log("🚀 ~ b:", b);
  console.log("🚀 ~ c:", c);
}

if (true) {
  const b = 10;
  // console.log("🚀 ~ a:", a);
  console.log("🚀 ~ b:", b);
  console.log("🚀 ~ c:", c);
}

// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ b:", b);
// console.log("🚀 ~ c:", c);
