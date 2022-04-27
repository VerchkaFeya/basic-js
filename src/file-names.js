const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * 
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];

  // for (let name of names) {
  //   if (!result.includes(name)) {
  //     result.push(name);
  //   } else {
  //     result.push(name + '(1)');
  //   }
  // }

  // return names.map(function(item, index, array) {
  //   let count = array.slice(0, index).filter(a => a == item).length;
  //   if (count == 0) {
  //     return item;
  //   } else { 
  //     return `${item}(${count})`
  //   }
  // })

// return result; 
}

module.exports = {
  renameFiles
};
