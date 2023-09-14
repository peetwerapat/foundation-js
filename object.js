// const person = {
//   name: "Peet",
//   age: 23,
//   pet: {
//     kind: "Dog",
//     age: 2,
//   },
// };

// * Access to Nested Object
// console.log(person.pet.kind); //Method 1 Recommend
// console.log(person["pet"]["kind"]); //Method 2

// * Example
// const keyName = "name";
// ! กรณีได้ด้านบนมาจากที่อื่น ในรูปแบบ keyName

// console.log("Name:", person.name);
// ! ถ้าใช้แบบ . ด้านบน จะใช้ keyName ไม่ได้ ; ถ้าฝืนใช้.keyName เวลา Run จะกลายเป็น undefined
// console.log("Name:", person[keyName]);
// ! ถ้าใช้แบบ [] จะใช้ keyName ที่ได้ข้อมูลจากที่อื่นมาได้

// * Review Reference Type
// const person2 = person;
// person2.name = "Dodo";

// console.log("person 1:", person);
// console.log("person 2:", person2);

// * Array of object: data from fetching data
const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

// data.forEach((data, index) => {
//   console.log(
//     `        Person ${index + 1}
//         Name: ${data.name}
//         Age: ${data.age}
//         Job: ${data.job}
//         ------------------`
//   );
// });

// * Ex.map
// const newData = data.map((data, index) => {
//   return `    Person ${index + 1}
//     Name: ${data.name}
//     Age: ${data.age}
//     Job: ${data.job}
//     ------------------\n`;
// });

// console.log(newData.join(""));
