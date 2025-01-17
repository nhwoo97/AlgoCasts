// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newStr = "";
  for (let i of str) {
    newStr = i + newStr;
  }

  return newStr;
}

module.exports = reverse;
