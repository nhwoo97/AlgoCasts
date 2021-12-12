// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //Use a while loop to splice up to the size given
  //then load the spliced part into value newArr

  let newArr = [];
  while (size <= array.length) {
    temp = array.splice(0, size);
    newArr.push(temp);
    temp = [];
  }

  if (array.length > 0) {
    newArr.push(array);
  }

  return newArr;
}
console.log(chunk([1, 2, 3, 4], 2));

module.exports = chunk;
