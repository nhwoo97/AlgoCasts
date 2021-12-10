// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  for (const char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  let highScore = 0;
  let winner = "";
  for (const c in chars) {
    if (chars[c] > highScore) {
      highScore = chars[c];
      winner = `${c}`;
    } else {
      continue;
    }
  }
  return winner;
}

module.exports = maxChar;
