const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arrString = members.filter(item => typeof item === "string");
  let arrLetter = arrString.map(item => item.trim().toUpperCase().substring(0,1));
  
  return arrLetter.sort().join('');
};
