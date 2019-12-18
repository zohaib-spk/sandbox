"use strict";

var timer = function timer(_timer) {
  return new Promise(function (resolve, reject) {
    console.log('processing');
    setTimeout(function () {
      console.log('timeout done');
      reject();
    }, _timer);
  });
};

timer(2000).then(function () {
  return alert('done');
})["catch"](function () {
  return alert('failed');
});