const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr) {
    if (!Array.isArray(arr)) throw 'Error';
    let new_arr = arr;
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      switch (new_arr[i]) {
        case '--discard-next':
            (new_arr[i + 1] !== undefined)? new_arr.splice(i, 2): new_arr.splice(i, 1);
            flag = true;
            break;
        case '--discard-prev':
                ((new_arr[i - 1] !== undefined) && (!flag))? new_arr.splice(i - 1, 2) : new_arr.splice(i, 1);
                flag = false;
            break;
        case '--double-next':
                (new_arr[i + 1] !== undefined)? new_arr[i] = new_arr[i + 1] : new_arr.splice(i, 1);
                flag = false;
            break;
        case '--double-prev':
                ((new_arr[i - 1] !== undefined) && (!flag))? new_arr[i] = new_arr[i - 1] : new_arr.splice(i, 1);
                flag = false;
             break;            
        
        }
  }
    return new_arr;
  //throw new CustomError('Not implemented');
};
