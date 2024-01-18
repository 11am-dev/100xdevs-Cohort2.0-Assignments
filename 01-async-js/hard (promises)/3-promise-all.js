/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const { error } = require("console");
const { promises } = require("dns");
const { resolve } = require("path");

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise resolved after one second");
      resolve("one");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise resolved after two second");
      resolve("two");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("promise resolved after three second");
      resolve("three");
    }, 3000);
  });
}

async function calculateTime() {
  const start = new Date();
  const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
  await Promise.all(promises);

  const end = new Date();
  console.log("time waited :" + (end - start) / 1000 + " seconds");
}

calculateTime()

//  async function calculateTime() {
//   const start = new Date();
//   const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];

//   return Promise.all(promises).then((results) => {
//     const end = new Date();
//     console.log("time taken : " + (end - start) / 1000 + " seconds");
//     return results;
//   });
// }

// calculateTime()
// .then((results) => {
//   console.log("Results:", results);
// })
// .catch((error) => {
//   console.error("Error:", error);
// });
