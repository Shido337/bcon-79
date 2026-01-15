/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ.
 * Використовуй конструкцію if...else.
 */

let link = "https://my-site.com/about";
// console.log("🚀 ~ link:", link);

function checkLink(link) {
  // let link

  // const hasEndSlash = link.endsWith("/");
  // if (!hasEndSlash) {
  //   return `${link}/`;
  // } else {
  //   return link;
  // }

  // return link.endsWith("/") ? link : link + "/";
  return link + (link.endsWith("/") ? "" : "/");
}

const res = checkLink(link);
// console.log("🚀 ~ res:", res);

/**
 * Форматування посилання (includes та логічне «І»)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

let url = "https://my-site.com/about";
// console.log("🚀 ~ url:", url);

function formatUrl(url) {
  const hasSlashAndSubStr = !url.endsWith("/") && url.includes("my-site");

  if (hasSlashAndSubStr) {
    return url + "/";
  } else {
    return url;
  }
}

const res2 = formatUrl(url);
// console.log("🚀 ~ res2:", res2);

/**
 * Пошук у рядку методом includes()
 */

const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaign";

function checkSpamWords(
  str,
  blacklistedWord1 = "spam",
  blacklistedWord2 = "sale"
) {
  // arguments = ["#fatlivesmatter advertising campaign", "spam", "sale", "adult", "buy"]
  const hasSpamWords =
    str.toLowerCase().includes(blacklistedWord1.toLowerCase()) ||
    str.toLowerCase().includes(blacklistedWord2.toLowerCase());

  if (hasSpamWords) {
    console.warn("Spam detected");
    return;
  }

  console.log("Clean str");
}

checkSpamWords(string1, blacklistedWord1, blacklistedWord2);
checkSpamWords(string2, blacklistedWord1, blacklistedWord2);
checkSpamWords(string3);
checkSpamWords(
  "#fatlivesmatter advertising campaign",
  "spam",
  "sale",
  "adult",
  "buy"
);
