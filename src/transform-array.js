const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!(arr instanceof Array)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length == 0) {
    return arr;
  }


  let flagsArray = arr.filter(item => typeof item === 'string');

  for (let i = 0; i < flagsArray.length; i++) {
      let index = arr.indexOf(flagsArray[i]);

      if (flagsArray[i] === `--discard-next`) { // если надо удалить следующий элемент `--discard-next`
        arr[index + 1] = undefined;
        let firstSlice = arr.slice(0, index);
        let secondSlice = arr.slice(index+1);
        arr = [...firstSlice, ...secondSlice];
      } else if (flagsArray[i] === `--discard-prev`) { // если надо удалить предыдущий элемент `--discard-prev`
        arr[index - 1] = undefined;
        let firstSlice = arr.slice(0, index);
        let secondSlice = arr.slice(index+1);
        arr = [...firstSlice, ...secondSlice];
      } else if (flagsArray[i] === `--double-next`) {  // если надо продублировать последующий элемент `--double-next`
        let firstSlice = arr.slice(0, index);
        let secondSlice = arr.slice(index + 1);
        firstSlice.push(secondSlice[0]);
        arr = [...firstSlice, ...secondSlice];
      } else if (flagsArray[i] === `--double-prev`) { // если надо продублировать предыдущий элемент `--double-prev`
        let firstSlice = arr.slice(0, index);
        let secondSlice = arr.slice(index + 1);
        firstSlice.push(firstSlice[index-1]);
        arr = [...firstSlice, ...secondSlice];
      }
    }
    return arr.filter(item => item != undefined);
}

module.exports = {
  transform
};