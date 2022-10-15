const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value = '') {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || typeof(position) !== 'number') {
      this.array.length = 0;
      throw new Error ("You can\'t remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    let x = this.array.join('~~');
    this.array.length = 0;
    return x;
  }
};

module.exports = {
  chainMaker
};
