/**
 * - Стек викликів
 * - Порядок виконання
 */

function fnA() {
  const x = 111;
  console.log("fnA execution");
  fnB();
}

function fnB() {
  const y = 222;
  console.log("fnB execution");
  fnC();
}

function fnC() {
  console.log("fnC execution");
  console.log("x", x);
  console.log("y", y);
}
console.log("Before fnA execution");
// fnA();
console.log("After fnA execution");

console.log("Before fnB execution");
// fnB();
console.log("After fnB execution");

console.log("Before fnC execution");
// fnC();
console.log("After fnC execution");

function fn1() {
  const x = 555;

  return function (y) {
    return x + y;
  };
}

// const add = fn1();

// debugger;
// const res = add(222);
// console.log("🚀 ~ res:", res);

function chooseDish(ingredients, chiefName) {
  // let ingredients;
  // let chiefName;
  const checkIngredient = "🍗";

  return function (dish) {
    if (ingredients.includes(checkIngredient)) {
      return `${dish} was prepared by ${chiefName} with ingredients ${ingredients.join(
        "; "
      )}`;
    } else {
      return `Sorry, ingredients out`;
    }
  };
}
// debugger;
// const makeDish = chooseDish(["🥬", "🥚", "🍅", "🧀", "🥖"], "Mango");
// const res1 = makeDish("🥗");
// console.log("🚀 ~ res1:", res1);
