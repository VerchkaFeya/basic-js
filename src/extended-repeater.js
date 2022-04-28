const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * =>  'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  console.log(options.addition);
  console.log(addition);
  console.log(additionSeparator);

  // переопределили сепаратор в том случае, если он указан, на значение по умолчанию "+" и второй сепаратор на '|'
  if (!separator) {
    separator = '+';
  }
  if (!additionSeparator) {
    additionSeparator = '|';
  }

  if (addition) {
    addition = String(addition);
  } else if (typeof addition === 'undefined') {
    addition = 0;
  } else if (typeof addition != 'string') {
    addition = String(addition);
  } 

  if (typeof str != "string") {
    str = String(str);
  }

  if (!repeatTimes) {
    repeatTimes = 1;
  }

  if (!additionRepeatTimes) {
    additionRepeatTimes = 1;
  }

  let additionArray = [];
  let stringArray = [];

  if (addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArray.push(addition);
      console.log(additionArray);
    }
    additionArray = additionArray.join(`${additionSeparator}`);
    console.log("addition array with separators:", additionArray);
  }

  for (let i = 0; i < repeatTimes; i++) {
    if (addition) {
      stringArray.push(str + additionArray);
    } else {
      stringArray.push(str);
    }
  }
  console.log(stringArray);

  return stringArray.join(`${separator}`)
}

module.exports = {
  repeater
};


