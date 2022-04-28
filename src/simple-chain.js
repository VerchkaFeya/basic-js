const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value === NaN) {
      this.result.push('NaN');
    }
    this.result.push(String(value));
    return this;
  },
  removeLink(position) {
    if (!position || !this.result[position-1] || !typeof position === 'number' || position > this.result.length || position <= 0) {
      this.result = [];
      throw new Error (`You can't remove incorrect link!`);
    } else {
      this.result = [...this.result.slice(0, position-1), ...this.result.slice(position)];
      return this;
    }
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    let arr = this.result.map(item => `( ${item} )`).join(`~~`);
    this.result = [];
    return arr;
  }
};

module.exports = {
  chainMaker
};
