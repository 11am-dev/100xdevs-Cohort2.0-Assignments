const fs = require("fs");

fs.writeFile("b.txt", "lassan", (error) => {
  if (error) {
    throw error;
  }
});

fs.readFile("b.txt", "utf-8", (error, data) => {
  console.log("Data: " + data);                       // to read the updated file
});
