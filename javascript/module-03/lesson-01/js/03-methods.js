/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// const coords = [
//   "n",
//   "x",
//   "y",
//   1,
//   53245654.76,
//   43245654.76,
//   2,
//   53245654.93,
//   43245654.76,
//   3,
//   542451213.76,
//   43245654.76,
// ];

// const coursesStr1 = courses.join("_");
// console.log("🚀 ~ coursesStr1:", coursesStr1);
// const coursesStr2 = courses.join(" ** ");
// console.log("🚀 ~ coursesStr2:", coursesStr2);
// const coursesStr3 = courses.join("; ");
// console.log("🚀 ~ coursesStr3:", coursesStr3);

// const csvFormat = coords.join(",");
// console.log("🚀 ~ csvFormat:", csvFormat);

// const phones = "09912345678,06612345678,05012345678,06712345678";
// const phonesArr = phones.split(",");
// console.table(phonesArr);

// const formattedPhoneArr = [];
// for (let i = 0; i < phonesArr.length; i++) {
//   const element = phonesArr[i];
//   console.log("🚀 ~ element:", "+38" + element);
//   formattedPhoneArr.push("+38" + element);
// }

// console.log("🚀 ~ formattedPhoneArr:", formattedPhoneArr);
// const formattedPhones = formattedPhoneArr.join(",");
// console.log("🚀 ~ formattedPhones:", formattedPhones);
// const markup = [
//   "<li>Item 1</li>",
//   "<li>Item 2</li>",
//   "<li>Item 3</li>",
//   "<li>Item 4</li>",
// ];
// console.log(markup.join(""));

// list.innerHTML = markup.join("");

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
const fullCoursesCopy = courses.slice();
// console.log("🚀 ~ fullCoursesCopy:", fullCoursesCopy);
// console.log(courses === fullCoursesCopy); // окрема копія
const someCouses = courses.slice(2);
// console.log("🚀 ~ someCouses:", someCouses);

const someCouses1 = courses.slice(2, 4);
// console.log("🚀 ~ someCouses1:", someCouses1);

const someCouses2 = courses.slice(-3);
// console.log("🚀 ~ someCouses2:", someCouses2);

const newCourses = ["Design", "AI course"];
const newCourses1 = ["Data Science", "Machine Learning"];

const updatedCourses = newCourses1.concat(newCourses, courses);
// console.log("🚀 ~ updatedCourses:", updatedCourses);

const courseIndex = courses.indexOf("SQL");
// console.log("🚀 ~ courseIndex:", courseIndex);

// if (courseIndex < 0) {
//   alert("Course not found");
// }

// console.log("🚀 ~ courses[courseIndex]:", courses[courseIndex]);

const pushRes = courses.push("Data Sciense");
// console.log("🚀 ~ pushRes:", pushRes);
// courses.push("SQL", "MS Excel");
// const res1 = courses.pop();
// console.log("🚀 ~ res1:", res1);
// const res2 = courses.pop();
// console.log("🚀 ~ res2:", res2);
// const res3 = courses.pop();
// console.log("🚀 ~ res3:", res3);

// ! Методи призводять до переіндексації масиву
// courses.unshift("Design");
// courses.shift();
// console.log(courses);

// Декілька перевірок
const hasCss = courses.includes("CSS");
const hasReact = courses.includes("React");
console.log("🚀 ~ hasCss:", hasCss);
console.log("🚀 ~ hasReact:", hasReact);

if (hasCss && hasReact) {
  console.log("Nessesary courses is in array");
}

const fruits = ["🍐", "🍊", "🍋", "🍌", "🍉", "🍎"];
const fruit = "🍎";

const hasFruit = fruits.includes(fruit);
if (hasFruit) {
  console.log("It's red fruit");
}

if (
  fruit === "🍐" ||
  fruit === "🍋" ||
  fruit === "🍌" ||
  fruit === "🍉" ||
  fruit === "🍎"
) {
  console.log("It's red fruit");
}
