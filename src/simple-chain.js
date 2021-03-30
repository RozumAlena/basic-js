const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  temp: '',
  getLength() {
   // console.log(this.chain.split('~~'));
    return this.chain.length;
  },
  addLink(value) {
    if (this.chain === undefined) console.log('chain undefined');
    value = (value === undefined) ? "" : value;
     this.chain.push(`( ${value} )`);
  },
  removeLink(position) {
    if (Number.isInteger(position) || (this.chain[position - 1] === undefined)) {
      this.chain = [];
      throw 'Error';
    } else {
    this.chain.filter((item, index) => (index !== position - 1));
    }
  },
  reverseChain() {
    this.chain.reverse();
  },
  finishChain() {
    //this.chain.join(`~~`);
    this.temp = this.chain.join(`~~`);
    this.chain = [];
    return this.temp;
  }
};

module.exports = chainMaker;
