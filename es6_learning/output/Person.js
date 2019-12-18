"use strict";

function fire(bool) {
  if (bool) {
    var foo = "bar";
    console.log(foo);
  } else {
    console.log(foo);
  }
}

fire(false);