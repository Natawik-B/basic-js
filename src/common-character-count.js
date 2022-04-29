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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let firstLetters = s1.split('');
  let secondLetters = s2.split('');
  let result = 0;

  for (i = 0; i < firstLetters.length; i++) {
    if (secondLetters.includes(firstLetters[i])) {
      secondLetters.splice(secondLetters.indexOf(firstLetters[i]), 1);
      result++;
    }
  } return result;
};

module.exports = {
  getCommonCharacterCount
};
