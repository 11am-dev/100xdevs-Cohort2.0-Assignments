/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { resolve } = require("path");

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("hii there"));
    }, n);
  });
}

console.log(wait(2000));
