/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

const animal = {
  legs: 4,
};

const dog = Object.create(animal);

dog.type = "Corghi";
dog.age = 0;

const jack = Object.create(dog);
jack.nickname = "Jack";
jack.age = 1;
jack.owner = {
  name: "Peter",
  status: "single",
  age: 35,
};
// console.log("🚀 ~ jack:", jack);
for (const key in jack) {
  // const value = jack[key];
  // console.log("🚀 ~ element:", `${key} : ${value}`);
}

//? Shadowing
// dog.legs = "Dog has 4 legs";

// console.log("🚀 ~ dog:", dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.ears);
// console.log("hasOwnProperty: name", dog.hasOwnProperty("name"));
// console.log("hasOwnProperty: legs", dog.hasOwnProperty("legs"));

// console.log(dog["legs"]);
// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

const dogKeys = Object.keys(dog);
// console.log("🚀 ~ dogKeys:", dogKeys);

for (const key of dogKeys) {
  // console.log(dog[key]);
}

const dogValues = Object.values(dog);
// console.log("🚀 ~ dogValues:", dogValues);

/**
 * ----------------------------------------
 */
const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

console.log(objA.hasOwnProperty("a"));
// console.log(objA.a);
objA.c = "New c prop";

console.log(objA.hasOwnProperty("b"));
// console.log(objA.b);

console.log(objA.hasOwnProperty("c"));
// console.log(objA.c);

console.log(objA.hasOwnProperty("x"));
// console.log(objA.x);

const employee = {
  role: "User",
  salary: 500,
  workingHours: 8,
};
// console.log("🚀 ~ employee:", employee);

const manager = Object.create(employee);
manager.role = "Manager";
manager.department = "Finance";
manager.salary = 1000;
// console.log("🚀 ~ manager:", manager);

const executiveOfficer = Object.create(manager);
executiveOfficer.role = "Officer";
executiveOfficer.salary = 3000;
executiveOfficer.workingHours = 10;
// console.log("🚀 ~ executiveOfficer:", executiveOfficer);
// console.log("🚀 ~ executiveOfficer:", executiveOfficer.department);

const admin = Object.create(employee);
admin.role = "Admin";
admin.department = "IT";
admin.salary = 1500;
// console.log("🚀 ~ admin:", admin);

class Employee {
  constructor(options = {}) {
    this.workingHours = 8;
    this.role = options.role;
    this.name = options.name;
  }
}

const empl1 = new Employee({ name: "Mango" });
// console.log("🚀 ~ empl1:", empl1);
const empl2 = new Employee({ role: "User", name: "Poly" });
// console.log("🚀 ~ empl2:", empl2);
const empl3 = new Employee({ role: "User", name: "Ajax" });
// console.log("🚀 ~ empl3:", empl3);

class Manager extends Employee {}
