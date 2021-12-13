// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //Make stringA and stringB lower case and use replace() to replace the spaces
  //Use a for loop to loop through stringA and use a hashmap to save the frequency of each letter
  //Do the same thing for stringB
  //Compare the result

  let a = stringA.replace(/[^\w]/g, "");
  let b = stringB.replace(/[^\w]/g, "");

  if (a.length != b.length) {
    return false;
  }

  hashA = {};
  hashB = {};

  for (const element of a) {
    if (!hashA[element]) {
      hashA[element] = 1;
    } else {
      hashA[element] = hashA[element] + 1;
    }
  }

  for (const element of b) {
    if (!hashB[element]) {
      hashB[element] = 1;
    } else {
      hashB[element] = hashB[element] + 1;
    }
  }

  for (const key in hashA) {
    if (!hashB[key]) {
      return false;
    } else if (hashA[key] != hashB[key]) {
      return false;
    } else {
      continue;
    }
  }

  return true;
}

module.exports = anagrams;
