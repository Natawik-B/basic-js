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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length == 0) {
    return [];
  }

  let array = [...arr];
  let moves = ['--double-prev', '--discard-prev', '--discard-next', '--double-next']
  for (i = 0; i < moves.length; i++) {
    let item = array.indexOf(moves[i]);
    if (item >= 0) {
      switch(i) {
        case 2:
          array.splice(item, 2, '');
        break;

        case 1:
          if (item == 0) {
            array.splice(item, 1, '');
          } else {
            array.splice(item - 1, 2, '');
          }
        break;
        
        case 3:
          if (item == (array.length - 1)) {
            array.splice(item, 1, '');
          } else {
            array.splice(item, 1, array[item + 1]);
          }
        break;

        case 0:
          if (item == 0) {
          array.splice(item, 1, '')
          } else {
            array.splice(item, 1, array[item - 1]);
          }
        break;
        default: alert('error');
      }
    }
  }
  let result = array.filter(e => (e != ''));
  return result;
};

module.exports = {
  transform
};
