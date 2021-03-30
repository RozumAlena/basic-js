const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth = 0;
  temp = 0;
  calculateDepth(arr) {
    if (Array.isArray(arr)){
      if ((arr.length === 0) || (arr.length === 1 && !Array.isArray(arr[0]))) {
        this.depth = 1;
        return this.depth;
      }
     
    } else {
      this.depth = 1;
      for(let i = 0; i < arr.length; i++) {
      this.depth += arr[i].calculateDepth;
      }
      return this.depth;
     // this.depth += this.calculateDepth(arr);
    }
    console.log(arr, this.depth, this.temp);
  }
};