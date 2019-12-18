"use strict";

function defaultDiscount() {
  return .10;
}

function applyDiscount(cost) {
  var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDiscount();
  return cost - cost * discount;
}

alert(applyDiscount(100));