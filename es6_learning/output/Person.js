"use strict";

function sumNumbers() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (prev, current) {
    return prev + current;
  });
}

console.log(sumNumbers(1, 2, 3));