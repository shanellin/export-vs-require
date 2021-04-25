// exports vs module.exports

// module.exports = {};
// var exrpots = module.exports;

const sayHi = 'hi!'

// 1.
exports.sayHi = `${sayHi} I'm exports`;
module.exports.sayHi = `${sayHi} I'm module.exports`;

// 2.
// module.exports = {
//   callFn: function () {
//     return `${sayHi} I'm object's function`;
//   },
//   useText: `${sayHi} I'm object's value`
// };
//- error
// exports = {
//   callFn: function () {
//     return `${sayHi} I'm object's function`;
//   },
//   useText: `${sayHi} I'm object's value`
// };

