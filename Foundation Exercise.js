// * 1
// const arr = [1, -4, 2, 0];

// const mapRevertSign = (arr) => {
//   const a = [];

//   arr.forEach((element) => {
//     a.push(0 - element);
//   });

//   return a;
// };
// console.log(mapRevertSign(arr)); // [-1, 4, -2, 0]

// * 2
// const arr = [1, 2, 3, 4, 5];

// const reverse = (array) => {
//   const a = [];
//   while (array.length) {
//     a.push(array.pop());
//   }

//   return a;
// };

// console.log(reverse(arr)); // [5, 4, 3, 2, 1]

// * 3
// const isMember = (mem, arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === mem) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isMember(5, [1, 3, 7, 12])); // false
// console.log(isMember("john", ["jane", "jim", "john"])); // true

// * 4
// const arr = [10, 20, 10, 20, 30, 50, 60, 100];
// const arr2 = unique(arr);

// function unique(arr) {
//   const arr2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     const currentValue = arr[i];
//     if (arr2.indexOf(currentValue) === -1) {
//       arr2.push(currentValue);
//     }
//   }

//   return arr2;
// }

// console.log(unique(arr));

// * 5
// function draw(n) {
//   let pattern = "";

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       pattern += "* ";
//     }
//     pattern += "\n";
//   }

//   console.log(pattern);
// }

// draw(5);

// * 6
// const drawNg = (n) => {
//   if (n < 0) return;

//   for (let i = 0; i < n; i++) {
//     // Initialize s
//     let s = "";
//     for (let j = 0; j <= i; j++) {
//       s += "*";
//     }
//     console.log(s);
//   }
// };

// drawNg(5);

// * 7
// const class1 = ["Alice", "Bob", "John", "Jane"];
// const class2 = ["John", "Foobar", "Barbaz", "Foobaz", "Bob"];

// const mutual = [];

// for (let i = 0; i < class2.length; i++) {
//   for (let j = 0; j < class1.length; j++) {
//     if (class2[i] === class1[j]) {
//       mutual.push(class2[i]);
//     }
//   }
// }
// console.log(mutual);

// * 8
// const fizzBuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz(20);

// * 9
// const gcd = (a, b) => {
//   if (!b) {
//     return a;
//   }

//   return gcd(b, a % b);
// };
// console.log(gcd(10, 15)); // 5
// console.log(gcd(18, 12)); // 6
// console.log(gcd(3, 2)); // 1

// * 10
// const arr = [120, 112, 111, 130, 169, 101];

// function filterLt(n, arr) {
//   const newArr = [];
//   for (i = 0; i < arr.length; i++)
//     if (n > arr[i]) {
//       newArr[newArr.length] = arr[i];
//     }
//   return newArr;
// }

// console.log(filterLt(0, arr)); // []
// console.log(filterLt(112, arr)); // [111, 101]

// * 11
// const arr = [120, 112, 111, 130, 169, 101];

// function filterGt(n, arr) {
//   const newArr = [];
//   for (i = 0; i < arr.length; i++)
//     if (n < arr[i]) {
//       newArr[newArr.length] = arr[i];
//     }
//   return newArr;
// }

// console.log(filterGt(0, arr)); // [120, 112, 111, 130, 169, 101]
// console.log(filterGt(112, arr)); // [120, 130, 169]

// * 12
// const compoundedReturn = (amount, interestPercent, periods) => {
//   for (let i = 0; i < periods; i++) {
//     amount = amount * (1 + interestPercent / 100);
//   }

//   return amount;
// };

// console.log(compoundedReturn(100, 1, 1)); // 101
// console.log(compoundedReturn(100, 10, 1)); // 110
// console.log(compoundedReturn(100, 10, 2)); // 121

// * 13
// function mean(arr) {
//   if (!arr.every((x) => typeof x === "number")) {
//     return null;
//   }

//   const sum = arr.reduce((acc, val) => acc + val, 0);
//   return sum / arr.length;
// }

// console.log(mean([1, 2, 3])); // 2
// console.log(mean([1, "foo", 3])); // null

// * 14
// const mid = (arr) => {
//   if (arr.length === 1) return arr;

//   const middlePosition = Math.floor(arr.length / 2);

//   if (arr.length % 2 === 0) {
//     const elem1 = arr[middlePosition - 1];
//     const elem2 = arr[middlePosition];

//     return [elem1, elem2];
//   }

//   return [arr[middlePosition]];
// };

// console.log(mid(["John"])); // ["John"]
// console.log(mid(["Foo", "bar", "baz"])); // ["bar"]
// console.log(mid([1, 2, 3, 4])); // [2, 3]

// * 15
// const arr = [3, 2, 1, 12, 13, 11];

// arr.sort();

// console.log(arr); // Output: [1, 11, 12, 13, 2, 3]

// * 16
// const median = (arr) => {
//   const mid = Math.floor(arr.length / 2);
//   const sortedArr = arr.sort((a, b) => a - b);

//   if (arr.length % 2 === 0) {
//     return sortedArr[mid - 1] + sortedArr[mid];
//   } else {
//     return sortedArr[mid];
//   }
// };

// console.log(median([2, 1, 5, 3, 4])); // 3

// * 17
// const initArr = (val, len) => {
//   return Array.from({ length: len }, () => val);
// };

// console.log(initArr(0, 5));

// * 18
// const flatMap = (arr) => {
//   const flattened = [];

//   arr.forEach((elem) => {
//     flattened.push(...elem);
//   });

//   return flattened;
// };

// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];

// console.log(flatMap(arr)); // [1, 2, 3, 100, 200, 10, 20]

// * 19
// const mean = (arr) => {
//   return arr.reduce((sum, num) => sum + num, 0) / arr.length;
// };

// const mapMean = (arr) => {
//   return arr.map((subArr) => mean(subArr));
// };

// const arr = [
//   [1, 2, 3],
//   [100, 200],
//   [10, 20],
// ];

// console.log(mapMean(arr)); // [2, 150, 15]

// * 20
// const fib = (n) => {
//   let fibSeries = [0, 1];

//   if (n < 1) return [];
//   if (n === 1) return [0];
//   if (n === 2) return fibSeries;

//   for (let i = 2; i < n; i++) {
//     fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
//   }

//   return fibSeries.toString();
// };

// console.log(fib(2)); // 0, 1

// console.log(fib(3)); // 0, 1, 1

// console.log(fib(4)); // 0, 1, 1, 2

// console.log(fib(5)); // 0, 1, 1, 2, 3

// console.log(fib(6)); // 0, 1, 1, 2, 3, 5

// * 21
// const toBytes = (s) => {
//   const bytes = [];

//   for (let i = 0; i < s.length; i++) {
//     const char = s.charCodeAt(i);

//     if (char > 255) {
//       continue;
//     }

//     bytes.push(char);
//   }

//   return bytes;
// };

// console.log(toBytes("Bar")); // [ 66, 97, 114 ]
// console.log(toBytes("Foo")); // [ 70, 111, 111 ]
// console.log(toBytes("Foo🔥")); // [ 70, 111, 111 ] because the emoji is invalid ASCII

// * Medium 1
// const arr = [12, -13, 14, 4, 2, -1, -18];
