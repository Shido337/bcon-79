/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

const allCars = [
  { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
  { make: "Honda", model: "Accord", amount: 2, price: 22455 },
  { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
  { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
  { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
  { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
  { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
  { make: "Ford", model: "F-150", amount: 11, price: 27110 },
  { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
  { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
];
// console.table(allCars);

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = cars => {
//   const models = cars.map((car, index, cars) => {
//     // console.log(car.model);
//     return car.model;
//   });

//   // console.log(models);
//   return models;
// };

const getModels = cars => cars.map(car => car.model);

// console.table(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із зміненим
 * значенням властивості price залежно від переданої знижки.
 */

const makeCarsWithDiscount = (cars, discount) => {
  return cars.map((car, index, array) => {
    return {
      ...car,
      price: car.price * (1 - discount),
    };
  });
};

// const res1 = makeCarsWithDiscount(allCars, 0.2);
// console.log("🚀 ~ res1:", res1);
// console.table(makeCarsWithDiscount(allCars, 0.4));

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
console.table(players);

/**
 * Збільшуємо кількість годин гравця за id
 */

const updatePlayerTimeById = (players, playerId) => {
  return players.map((player, index, players) => {
    if (player.id === playerId) {
      // player.timePlayed += 100; //! Мутація (зміна) вхідних даних
      // return player;
      return {
        ...player, // spread
        timePlayed: player.timePlayed + 100,
      };
    }

    // return player; //! Мутація (зміна) вхідних даних
    return { ...player }; // spread
  });
};

const updatedPlayers = updatePlayerTimeById(players, "player-3");
// console.log(updatedPlayers);

// console.table(players);
