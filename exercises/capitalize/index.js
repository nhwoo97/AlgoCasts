// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //Iterate through each character in the string
  //Everytime there is a whitespace before, capitalize that letter
  //Save the new string to newStr
  //Alternatively, you can split the string with each word being part of the array
  let arr = str.split("");
  newString = "";
  for (let i in arr) {
    if (arr[i - 1] === " ") {
      newString = newString + arr[i].toUpperCase();
    } else if (i == 0) {
      newString = newString + arr[i].toUpperCase();
    } else {
      newString = newString + arr[i];
    }
  }
  return newString;
}

module.exports = capitalize;
