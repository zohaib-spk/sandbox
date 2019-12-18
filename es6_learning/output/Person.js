"use strict";

function userFunction(name, email) {
  this.name = name;
  this.email = email;
}

userFunction.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

var newUser = new userFunction('zohaib', 'akram');
console.dir(newUser); // class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//
//     static register(...args) {
//         return new User(...args);
//     }
//
//     changeEmail(newEmail) {
//         this.email = newEmail;
//     }
// }
//
// const user = User.register('zohaib Akram', 'zohaib.akram3536@gmail.com');
// console.dir(user);