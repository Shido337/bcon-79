/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

const updateHotelParams = function (newRating, emptyRooms) {
  // let newRating  -> undefined;
  // let emptyRooms -> undefined;
  // console.log(newRating, emptyRooms);
  // console.log("updateHotelParams -> this", this); // this -> hotel
  // console.log(arguments);

  this.rating = newRating;
  this.emptyRooms = emptyRooms;

  // return undefined;
};

// updateHotelParams();
// console.dir(updateHotelParams);

const hotel = {
  name: "Resort hotel",
  rating: 4,
};

const motel = {
  name: "Old Dutch",
  rating: 4.4,
};

// updateHotelParams.call(hotel, 4.8, [111, 222, 333, 444]);
// updateHotelParams.call(hotel, [{}, {}, {}]);
// updateHotelParams.apply(motel, [5, [100, 200, 300, 400]]);
// updateHotelParams.apply(motel, [[{}, {}, {}]]);

// updateHotelParams(10, [777, 888, 999]);

// console.log(hotel);
// console.log(motel);

/**
 * -------------------------------
 */
const changeColor = function (newColor) {
  console.log("changeColor -> this", this);

  this.color = newColor;
};

const hat = {
  color: "black",
};

// changeColor.call(hat, "orange");
// console.log(hat);

const sweater = {
  color: "green",
};

// changeColor.call(sweater, "blue");
// console.log(sweater);

/**
 * -------------------------------
 */
const changeHatColor = changeColor.bind(hat);
// console.log(changeHatColor);

const changeSweaterColor = changeColor.bind(sweater);
// console.log(changeSweaterColor);

// changeHatColor("yellow");
// console.log(hat);

// changeSweaterColor("red");
// console.log(sweater);

/**
 * -------------------------------
 */
const counterInterface = document.querySelector(".js-interface").children[0];
const btnIncrement = document.querySelector(".js-increment");
const btnDecrement = document.querySelector(".js-decrement");

const counter = {
  value: 0,

  increment(value) {
    // console.log("increment -> this", this);
    this.value += value;
  },

  decrement(value) {
    // console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
  counterInterface.innerHTML = counter.value;
};

const increaseCounterValue = counter.increment;
const decreaseCounterValue = counter.decrement;

btnIncrement.onclick = () =>
  updateCounter(10, increaseCounterValue.bind(counter));
btnDecrement.onclick = () =>
  updateCounter(5, decreaseCounterValue.bind(counter));

// console.log(counter);

counterInterface.innerHTML = counter.value;
