/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

const username = "Jacob Mercer";
// console.log("🚀 ~ username:", username);

const firstName = username.slice(0, 5);
// console.log("🚀 ~ firstName:", firstName);

const userNameCopy = username.slice();
// console.log("🚀 ~ userNameCopy:", userNameCopy);

const secondName = username.slice(6);
// console.log("🚀 ~ secondName:", secondName);

const reversedIndex = username.slice(-3);
// console.log("🚀 ~ reversedIndex:", reversedIndex);

const res1 = username.toLowerCase();
// console.log("🚀 ~ res1:", res1);

const res2 = username.toUpperCase();
// console.log("🚀 ~ res2:", res2);

const testStr = "mango thedog";

// ? Chaining
const res3 = testStr.slice(0, 1).toUpperCase() + testStr.slice(1);
// console.log("🚀 ~ res3:", res3);

const testStr1 = "poly";
const res4 = capitalize(testStr1);
// console.log("🚀 ~ res4:", res4);

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

const useremail = "mango@mail.com";
const hasChar = useremail.includes("@");
// console.log("🚀 ~ hasChar:", hasChar);
const hasDomainName = useremail.includes(".com");
// console.log("🚀 ~ hasDomainName:", hasDomainName);

if (hasChar && hasDomainName) {
  // console.log("Valid email");
}

const url = "https://example.com";
const hasStartSymbols = url.startsWith("http://");
// console.log("🚀 ~ hasStartSymbols:", hasStartSymbols);
const hasEndSymbols = url.endsWith("/");
// console.log("🚀 ~ hasEndSymbols:", hasEndSymbols);

let newUrl;
if (!hasEndSymbols) {
  newUrl = url + "/";
}

// console.log(newUrl);

const fullName = "mango thedog fury";
const idxSymbol = fullName.indexOf(" ");
console.log("🚀 ~ idxSymbol:", idxSymbol);

let name1 = fullName.slice(idxSymbol + 1);
console.log("🚀 ~ name1:", name1);
let name2 = fullName.slice(0, idxSymbol);
console.log("🚀 ~ name2:", name2);

name1 = capitalize(name1);
name2 = capitalize(name2);
console.log("🚀 ~ name1:", name1);
console.log("🚀 ~ name2:", name2);

const updName = `${name2} ${name1}`;
console.log("🚀 ~ updName:", updName);

// const words = fullName.split(" ");
// console.log("🚀 ~ words:", words);

// let capitalizedWords = "";
// for (let i = 0; i < words.length; i++) {
//   const word = words[i];
//   console.log("🚀 ~ word:", word);
//   capitalizedWords += capitalize(word) + " ";
// }
// console.log("🚀 ~ capitalizedWords:", capitalizedWords);

searchBtn.onclick = searchProducts;

function searchProducts() {
  const search = searchQuery.value.trim();

  if (search.length === 0) {
    alert("Fill search input");
    return;
  }

  console.log("🚀 ~ searchProducts ~ search:", search);
  alert("Waiting for result...");
}
