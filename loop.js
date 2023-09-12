function normalLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log("Hello");
  }
}
//normalLoop();

function reverseLoop() {
  for (let i = 3; i >= 0; i--) {
    console.log("Peet");
  }
}
//reverseLoop();

function loopThroughArray() {
  const tripLocation = ["London", "Bali", "Amsterdam", "Paris"];

  //   for (let i = 0; i < tripLocation.length; i++) {
  //     console.log(tripLocation[i]);
  //   }

  // * Reverse Loop through array
  //   for (let i = tripLocation.length - 1; i >= 0; i--) {
  //     console.log(tripLocation[i]);
  //   }

  // * Break keyword
  //   for (let i = 0; i < tripLocation.length; i++) {
  //     if (tripLocation[i] === "Bali") {
  //       break;
  //     }

  //     console.log(tripLocation[i]);
  //   }

  // * Continue keyword
  for (let i = 0; i < tripLocation.length; i++) {
    if (tripLocation[i] === "Bali") {
      continue;
    }

    console.log(tripLocation[i]);
  }
}
//loopThroughArray();

// * While loop
function whileLoop() {
  //   let i = 0;
  //   while (i < 5) {
  //     console.log(i);
  //     i++;
  //   }

  let count = 1;
  while (count < 100) {
    count = count + 2;
  }

  console.log(count);
}
//whileLoop();

// * Nested loop
function nestedLoop() {
  for (let i = 0; i < 3; i++) {
    console.log("i", i);
    for (let j = 0; j < 3; j++) {
      console.log("j", j);
    }
  }
}
nestedLoop();
