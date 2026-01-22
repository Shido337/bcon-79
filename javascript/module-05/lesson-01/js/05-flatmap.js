/**
 * Метод flatMap
 */

const tweets = [
  {
    id: "000",
    likes: 5,
    tags: ["js", "nodejs"],
  },
  {
    id: "001",
    likes: 2,
    tags: ["html", "css"],
  },
  {
    id: "002",
    likes: 17,
    tags: ["html", "js", "nodejs"],
  },
  {
    id: "003",
    likes: 8,
    tags: ["css", "react"],
  },
  {
    id: "004",
    likes: 0,
    tags: ["js", "nodejs", "react"],
  },
];

const tags = tweets.flatMap(tweet => {
  return tweet.tags;
});
console.log(tags);

//! Не працює з обʼєктами. Працює тільки з масивами
// const flatenedTags = tweets.flat(Infinity);
// console.log("🚀 ~ flatenedTags:", flatenedTags);
