// * Main callback function
// const callMe = () => {
//   console.log("hello from callback function");
// };

// const greeting = (callback) => {
//   console.log("hello world");
//   callback();
// };

// greeting(callMe);

// * Anonymous Function
// function() {
//     console.log('Peet from anonymous function')
// }

// () => {
//     console.log('Peet from anonymous function')
// }

// * Test Recommend
// const friends = (manYWII) => {
//   console.log("Few");
//   manYWII();
// };

// friends(() => {
//   console.log("Nop");
//   console.log("Tun");
// });

// * Add Parameter Recommend
// const friends = (manYWII) => {
//   console.log("Few");
//   manYWII("Sadao"); //Sadao = parameter in manYWII(callback)
// };

// friends((city) => {
//   console.log(`Nop from ${city}`);
//   console.log(`Tun from ${city}`);
// });

// * Loop Callback
// const friends = ["Tun", "Nop", "Few"];

// const loopFriends = (name, cb) => {
//   for (let i = 0; i < name.length; i++) {
//     cb(name[i]);
//   }
// };

// loopFriends(friends, (name) => {
//   console.log(name);
// });

// * Loop Callback Return to New Array
// const friends = ["Tun", "Nop", "Few", "Dodo"];
// const city = "Sadao";

// const mapFriends = (name, cb) => {
//   const result = [];

//   for (let i = 0; i < name.length; i++) {
//     const newFriend = cb(name[i]);
//     result.push(newFriend);
//   }

//   return result;
// };

// const fromFriends = mapFriends(friends, (name) => {
//   return `${name} from ${city}`;
// });

// console.log(fromFriends);
