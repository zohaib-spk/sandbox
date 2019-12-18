"use strict";

function sumNumbers() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (prev, current) {
    return prev + current;
  });
}

var numbers = [1, 2, 3, 4, 5, 6];
console.log(sumNumbers.apply(void 0, numbers));