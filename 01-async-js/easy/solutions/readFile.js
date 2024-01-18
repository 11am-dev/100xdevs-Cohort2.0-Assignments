// readFile

const fs = require("fs");
//fs = file system

fs.readFile("b.txt", "utf-8", (error, data) => {
  console.log("Content of file: " +data);
});
console.log("hi there");

for (let i = 0; i < 10000000000; i++) {
  let a = 0;
  a++;
}

console.log("hi there 2");