// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //Palindrones need to be the same word even after reversing the string
  //Turn into array using deconstructing
  //reverse
  //turn into string
  //compare with original
  //return true or false depending on if they are the same

  rev = [...str].reverse().join("");
  if (rev == str) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindrome;
