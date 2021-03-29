const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = (flag === undefined) || flag;
  }
  encrypt(message, key) {
      if (message === undefined ||  key === undefined) throw "Error";
      let countRepeat = Math.ceil(message.length / key.length);
      let wordUp = message.toUpperCase();
      let codeLetterCrypt, letterCrypt, str = "";
      let keyNewUp = key.toUpperCase().repeat(countRepeat); 
      let regEx = /[A-Z]/; 
      for(let i = 0; i < wordUp.length; i++) {
        if (regEx.test(wordUp[i])) {
        codeLetterCrypt = ((wordUp.charCodeAt(i) + keyNewUp.charCodeAt(i)) - 65 * 2) % 26;
        letterCrypt = String.fromCharCode(codeLetterCrypt + 65);
        str += letterCrypt; 
        } else {
         str += wordUp[i];
         keyNewUp = keyNewUp.slice(0,i) + wordUp[i] + keyNewUp.slice(i); 
        }  
      } 
      (this.flag) ? str.split('').reverse().join('') :  str;
       return str;
  } 
     
  decrypt(message, key) {
if (message === undefined ||  key === undefined) throw "Error";
let countRepeat = Math.ceil(message.length / key.length);
let wordUp = message.toUpperCase();
let codeLetterCrypt, letterCrypt, str = "";
let keyNewUp = key.toUpperCase().repeat(countRepeat);
let regEx = /[A-Z]/; 
for(let i = 0; i < wordUp.length; i++) {
  if (regEx.test(wordUp[i])) {
  codeLetterCrypt = (wordUp.charCodeAt(i) - keyNewUp.charCodeAt(i) + 26) % 26;
  letterCrypt = String.fromCharCode(codeLetterCrypt + 65);
  str += letterCrypt; 
  } else {
   str += wordUp[i];
   keyNewUp = keyNewUp.slice(0,i) + wordUp[i] + keyNewUp.slice(i); 
  }  
}  
(this.flag) ? str.split('').reverse().join('') :  str;
return str;
  }
}

module.exports = VigenereCipheringMachine;
