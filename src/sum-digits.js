const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  /*n = n.toString();
  n = n.split('');
  let sum = 0;

  if (n.length != 1) {
    for (i = 0; i < n.length; i++) {
      sum += n[i];
    } return sum;
  } else if (n.length == 1) {
    sum = n.join('');
  } return sum;*/
};

module.exports = {
  getSumOfDigits
};
