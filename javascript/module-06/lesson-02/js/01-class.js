/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */
//TODO: Види напоїв
const ristretto = {
  type: "ristretto",
  waterAmount: 0.05,
};
const espresso = {
  type: "espresso",
  waterAmount: 0.1,
};
const americano = {
  type: "americano",
  waterAmount: 0.2,
};

class CoffeMachine {
  //? Публічні властивості
  // maker;
  // model;
  // waterTank;
  // power;

  //* Статичні властивості
  static totalCoffeMachine = 0;

  //? Приватні властивості
  #waterTank;
  #coffeCounter = {};

  get coffeCounter() {
    return this.#coffeCounter;
  }
  set coffeCounter(type) {
    this.#coffeCounter[type] =
      this.#coffeCounter[type] === undefined ? 1 : this.#coffeCounter[type] + 1;
  }

  get waterTank() {
    if (this.#waterTank === undefined) {
      alert("Обʼєм бака не визначено");
      return null;
    }
    return this.#waterTank;
  }
  set waterTank(newCapacity) {
    if (newCapacity > 0) {
      this.#waterTank = newCapacity;
    }
  }

  constructor(config) {
    this.maker = config.maker;
    this.model = config.model;
    this.waterTank = config.waterTank;

    const isPowerPassed = this.checkPowerCapacity(config.power);
    if (isPowerPassed) {
      this.power = config.power;
    }

    CoffeMachine.totalCoffeMachine += 1;
  }

  checkPowerCapacity(powerValue) {
    if (powerValue <= 0) {
      console.warn("Потужність не може бути менше нуля");
      return false;
    }

    return true;
  }

  changeWaterTankCapacity(newCapacity) {
    if (newCapacity > 0) {
      this.waterTank = newCapacity;
    }
  }

  prepareCoffe(coffe) {
    if (this.waterTank - coffe.waterAmount > 0) {
      this.waterTank -= coffe.waterAmount;
      this.coffeCounter = coffe.type;

      console.log(`Кава ${coffe.type} готова. Насолоджуйтесь 😋`);
    } else {
      console.error(`Недостатня кількість води для приготування ${coffe.type}`);
    }
  }

  //* Статичні методи класу
  static showTotalCoffeMachineCounter() {
    return `Total amount of coffe machine is ${CoffeMachine.totalCoffeMachine}`;
  }
}

// Паттерн "обʼєкт параметрів"
const philipsConfig = {
  maker: "Philips",
  power: 1500,
  waterTank: 2,
  model: "Series 3300",
};
const philips = new CoffeMachine(philipsConfig);
console.log("🚀 ~ philips:", philips);

console.log(philips.waterTank); // викликається get()
philips.waterTank = 0.9; // викликається set()

philips.prepareCoffe(americano);
philips.prepareCoffe(americano);
philips.prepareCoffe(americano);

philips.prepareCoffe(espresso);
philips.prepareCoffe(espresso);

philips.prepareCoffe(americano);
console.log("Кавоварка Philips пиготувала:", philips.coffeCounter);

const delonghiCongig = {
  maker: "Delonghi",
  model: "ECP 3420",
  waterTank: 1,
  power: -100,
};
const delonghi = new CoffeMachine(delonghiCongig);

// delonghi.prepareCoffe(americano);
// delonghi.prepareCoffe(americano);
// delonghi.prepareCoffe(americano);

// console.log(CoffeMachine.showTotalCoffeMachineCounter());

// delonghi.changeWaterTankCapacity(-1.5);
// console.log("🚀 ~ delonghi:", delonghi);

// const bosch = new CoffeMachine("Bosch", "Series 1");
// console.log("🚀 ~ bosch:", bosch);

// console.log(philips.power);
// console.log(delonghi.power);

class Coffe {
  _waterLimit; // protected property

  constructor(parameters) {}
}
