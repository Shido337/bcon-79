/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

// Клас базової кавомашини
class CoffeMachine {
  constructor(params) {
    this.power = params.power;
    this.waterLimit = params.waterLimit;
  }

  checkWaterLimit() {
    return this.waterLimit;
  }
}

const philips = new CoffeMachine({ power: 1000, waterLimit: 1 });

class SmartCoffeMachine extends CoffeMachine {
  constructor(params) {
    super(params);
    this.milkTank = true;
    this.model = params.model;

    // this.power = params.power;
  }

  showWaterLimit() {
    console.log(this.waterLimit);
  }

  checkWaterLimit() {
    return `${this.model} має обʼєм баку для води ${this.waterLimit}`;
  }
}
const smartPhilips = new SmartCoffeMachine({
  power: 1200,
  waterLimit: 1.5,
  model: "Philips Smart3000",
});
console.log("🚀 ~ smartPhilips:", smartPhilips);

smartPhilips.showWaterLimit();
const res1 = smartPhilips.checkWaterLimit();
console.log("🚀 ~ res1:", res1);

// Розширення базових класів
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

const numbers = new PowerArray(1, 2, 3, 4, 5);
console.log("🚀 ~ numbers:", numbers);
const isArrEmpty = numbers.isEmpty();
console.log("🚀 ~ isArrEmpty:", isArrEmpty);
