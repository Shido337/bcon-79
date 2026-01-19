/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
  userInfo: {
    id: 123,
    nickName: "Mango",
    meta: {
      email: "mango@mail.com",
      phone: "09912345678",
      password: "qwe123",
      location: {
        country: "Ukraine",
        city: "Kyiv",
        lon: "45.123",
        lat: "25.098",
      },
    },
  },
  "has Subscription": true,
};
// console.log("🚀 ~ playlist:", playlist);
// const userInfo = "";

playlist["has Subscription"];

// console.log(playlist["userInfo"]);
// console.log(playlist.name); // read
playlist.name = "New playlist"; // write
// console.log(playlist.name); // read

// console.log(playlist.tracksCount);
playlist.tracksCount = 3;
// console.log(playlist.tracksCount);

// console.log("🚀 ~ playlist:", playlist);

const trackName = playlist.tracks[1]; // []
// console.log("🚀 ~ trackName:", trackName);

const userNickname = playlist.userInfo.nickName;
// console.log("🚀 ~ userNickname:", userNickname);

const userLocation = playlist?.userInfo?.meta?.location?.country;
// console.log("🚀 ~ userLocation:", userLocation);

/**
 * -----------------------------------
 */
// const propertyName = "tracks";

// if (playlist[propertyName]) {
//   const tracks = playlist[propertyName];
//   console.log("🚀 ~ firstTrack:", tracks[0]);
// }

// 1. Шукає змінну propertyName
// 2. propertyName = "tracks"
// 3. playlist["tracks"] -> доступ до властивості за ключем "tracks"
// 4. ["track-1", "track-2", "track-3"] -> повертається список треків

/**
 * --- Обʼєкт параметрів ---
 */
function fn(values = {}) {
  console.log("🚀 ~ fn ~ values:", values);
  console.log("🚀 ~ fn ~ a:", values.a);
  console.log("🚀 ~ fn ~ b:", values.b);
}

fn({ a: 111, b: 222 });
fn({ b: 222, a: 111 });

function fn1(x, y) {
  console.log("🚀 ~ fn1 ~ x:", x);
  console.log("🚀 ~ fn1 ~ y:", y);
}

fn1(444, 555);
fn1(555, 444);
