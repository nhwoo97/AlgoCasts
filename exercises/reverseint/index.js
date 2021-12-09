// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //if n is below 0 add make the value negative in the end
  //turn n into string
  //reverse
  //turn into string
  if (n > 0) {
    const temp = n.toString().split("").reverse().join("");
    return parseInt(temp);
  } else if (n == 0) {
    return 0;
  } else {
    const temp = n.toString().split("").reverse().join("");
    return -parseInt(temp);
    return n;
  }
}

module.exports = reverseInt;
