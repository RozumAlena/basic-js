const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const arrSeasons = ["spring", "summer","autumn", "winter"];
  
  if (typeof date === "undefined") return 'Unable to determine the time of year!';
  //if (date instanceof Date && (new Date(date).toString()  !== "Invalid Date") ) {
    if ( Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN');
    if (new Date(date).toString()  !== "Invalid Date" ) {
    const month = date.getMonth();
    if (month > 1 && month < 5 ) {
      return arrSeasons[0];
    } else if (month >= 5 && month < 8 ) {
      return arrSeasons[1];
    } else if (month >= 8 && month < 11 ) {
      return arrSeasons[2];
    } else {
      return arrSeasons[3];
    } 
  } else {
        return 'Error';
     }
};
