"use strict";

function sumNumbers(value) {
  for (var _len = arguments.length, numbers = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    numbers[_key - 1] = arguments[_key];
  }

  return numbers.reduce(function (prev, current) {
    return prev + current;
  }) + value;
}

var numbers = [1, 2, 3];
console.log(sumNumbers.apply(void 0, [4].concat(numbers)));