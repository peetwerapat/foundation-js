// * ForEach
// const friends = ["Dodo", "Tun", "Few"];

// friends.forEach((name, idx) => {
//   console.log(idx, name);
// });

// * Map = Loop Callback return to New Array
const friends = ["Dodo", "Tun", "Few"];

const fromFriends = friends.map((name) => {
  return `${name} from Sadao`;
});

console.log(fromFriends);
