"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TaskCollection =
/*#__PURE__*/
function () {
  function TaskCollection() {
    var task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, TaskCollection);

    this.task = task;
  }

  _createClass(TaskCollection, [{
    key: "log",
    value: function log() {
      this.task.forEach(function (task) {
        return console.log(task);
      });
    }
  }]);

  return TaskCollection;
}();

var Task = function Task() {
  _classCallCheck(this, Task);
};

new TaskCollection([new Task(), new Task(), new Task()]).log();