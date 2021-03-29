const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  function rep(st, num, sep, sepAlt) {
    if (num !== undefined) {
      sep = sep || sepAlt;
      st += sep;
     return st.toString().repeat(num).slice(0,-sep.length);
    } else {
      return st.toString();
    } 
}
 
if (options.repeatTimes === undefined) {  
  if (options.addition === undefined) {
     return String(str);
   } else {
          if (options.additionRepeatTimes === undefined) {
            return String(str) + String(options.addition);
          } else {
            return String(str) + rep(String(options.addition), options.additionRepeatTimes,
                   options.additionSeparator, '|');
          }
   }
} else {
   if (options.addition === undefined) {
     return rep(String(str), options.repeatTimes, options.separator, '+');
   } else { 
         if (options.additionRepeatTimes === undefined) {
           return rep(String(str) + String(options.addition),options.repeatTimes,
         options.separator, '+');
         } else {
           return rep(String(str) + rep(String(options.addition), options.additionRepeatTimes,
                   options.additionSeparator, '|'),
        options.repeatTimes,
         options.separator, '+');
         }
   }
}
};
  