const fs = require("fs");

readFile = (filename) => {
  return new Promise((resolve) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      const ans = data.replace(/\s+/g, " ");
      resolve(ans);
    });
  });
};

writeFile = (filename, ans) => {
  fs.writeFile(filename, ans, (err) => {
    console.log("Successfully writen file");
  });
};

async function cleanFile(filename) {
  let ans = await readFile(filename);
  writeFile(filename, ans);
}
cleanFile("a.txt");

console.log("hii therer");
