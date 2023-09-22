let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      // true or false
      resolve("Found a data");
    } else {
      reject("Data not found");
    }
  }, 3000);
});

console.log(data);

data
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("done");
  });
