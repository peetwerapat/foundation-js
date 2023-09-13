const myArr = ["Peet", 23];

console.log("My name:", myArr[0]);
console.log("My age:", myArr[1]);

// console.log(myArr[10])

myArr.push("Sat");
myArr.push("2000");

const newArr = myArr.slice(1, 4);

console.log(myArr);
console.log(newArr);

console.log(myArr.indexOf(23));

const newArr2 = myArr.concat("hello", "cleverse academy");

console.log(newArr2);
