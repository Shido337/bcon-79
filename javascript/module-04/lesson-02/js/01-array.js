/**
 * Масив об'єктів
 *
 * - Перебір масиву
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

console.table(friends);

/**
 * Пошук друга за іменем
 */
function findFriendByName(allFriends, friendName) {
  // allFriends = [ {...}, {...}, {...}, {...} ] перелік друзів
  // friendName = "Poly"
  for (const friend of allFriends) {
    // const friend = {...} обʼєкт номер 3
    if (friend.name === friendName) {
      // friend.name = "Poly" === "Chelsy"
      console.log("Exsist");
      return true;
    }
  }

  console.log("Doesn't exist");
  return false;
}

// const res1 = findFriendByName(friends, "Poly");
// console.log("🚀 ~ res1:", res1);
// const res2 = findFriendByName(friends, "Chelsy");
// console.log("🚀 ~ res2:", res2);

/**
 * Отримуємо імена всіх друзів
 */
function getAllNames(allFriends) {
  // allFriends = [ {...}, {...}, {...}, {...} ] перелік друзів
  const friendNames = [];

  for (const friend of allFriends) {
    // const friend =  { name, online }
    // console.log("🚀 ~ getAllNames ~ friend.name:", friend.name);
    friendNames.push(friend.name);
  }

  return friendNames;
}

const res3 = getAllNames(friends);
// console.log("🚀 ~ res3:", res3);

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend.name);
    }
  }

  return onlineFriends;
}

const res4 = getOnlineFriends(friends);
// console.log("🚀 ~ res4:", res4);

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів каменів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * такою назвою, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice(allStones, searchStoneName) {
  // allStones =[ {...}, {...}, {...}, {...} ]
  // searchStoneName = "Сапфір"

  for (const stone of allStones) {
    // const stone = { name, price, quantity }
    // console.log(stone);
    if (stone.name === searchStoneName) {
      return stone.price * stone.quantity;
    }
  }

  return 0;
}

const totalStonePrice1 = calcTotalPrice(stones, "Сапфір"); // 2800
// console.log("🚀 ~ totalStonePrice1:", totalStonePrice1);
const totalStonePrice2 = calcTotalPrice(stones, "Щебінь"); // 400
// console.log("🚀 ~ totalStonePrice2:", totalStonePrice2);
const totalStonePrice3 = calcTotalPrice(stones, "Бурштин"); // 400
// console.log("🚀 ~ totalStonePrice3:", totalStonePrice3);
