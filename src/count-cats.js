const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  const arr1= arr.flat();
let num = arr1.filter(item => item === '^^');
return num.length;
};
