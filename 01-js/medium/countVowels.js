/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // // Convert the string to lowercase to make the comparison case-insensitive
  // const lowerCaseStr = str.toLowerCase();

  // // Define an array of vowels
  // const vowels = ['a', 'e', 'i', 'o', 'u'];

  // // Use the reduce function to count the vowels in the string
  // const vowelCount = lowerCaseStr.split('').reduce((count, char) => {
  //   if (vowels.includes(char)) {
  //     return count + 1;
  //   }
  //   return count;
  // }, 0);

  // return vowelCount;

  //REGEX
  
  return str.replace(/[^aeiou]/gim, "").length; // it means putting every other element except aeiou into empty string i.e removing them
  //return str.replace(/[aeiou\s]/gim, "").length;    it means aeiou and spaces are to be put into empty string i.e removing them
}

module.exports = countVowels;
