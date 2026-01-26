const calc = (a, operation, b) =>
  ({
    "+": +a + +b,
    "-": +a - +b,
    "*": +a * +b,
    "/": +a / +b,
  })[operation];

console.log(calc(3, "*", 4)); // 12
console.log(calc("3", "+", 4)); // 12
