// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  if (n <= 0) {
    return;
  }

  //i dictates how many #s there are
  i = 1;
  while (i < n || i === n) {
    let pounds = Array(i + 1).join("#");
    let spaces = Array(n - i + 1).join(" ");
    console.log(pounds + spaces);
    i++;
  }
}

module.exports = steps;
