/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:


***********************************************************************/


function range(start, end, array) {
  array = array || [];

  if (end < start) {
    return [];
  } else if (start < end) {
    array.push(start);
    return range(start + 1, end, array);
  } else {
    return array;
  }
}

debugger;
console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
