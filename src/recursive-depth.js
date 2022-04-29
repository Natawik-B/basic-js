const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let depth = 1;
    let arr = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == []) {
        depth += 1;
      }
    } return depth;
  }
};

module.exports = {
  DepthCalculator
};
