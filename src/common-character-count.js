const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {

  let count = 0;

  if (s1.length >= s2.length) {
    let string1 = s1;
    let string2 = s2;

    for (let i = 0; i < s2.length; i++) {
      if (string1.indexOf(s2[i]) !== -1) {
        let x = string2.indexOf(s2[i]);
        string2 = string2.slice(0, x) + string2.slice(x+1);

        let j = string1.indexOf(s2[i]);
        string1 = string1.slice(0, j) + string1.slice(j+1);
        count++;
      }
    }
  } else {
    let string1 = s1;
    let string2 = s2;

    for (let i = 0; i < s1.length; i++) {
      if (string2.indexOf(s1[i]) !== -1) {
        let x = string1.indexOf(s1[i]);
        string1 = string1.slice(0, x) + string1.slice(x+1);

        let j = string2.indexOf(s1[i]);
        string2 = string2.slice(0, j) + string2.slice(j+1);
        count++;
      }
    }

  }
  
  return count;
}

module.exports = {
  getCommonCharacterCount
};
