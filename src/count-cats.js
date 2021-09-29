import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(array) {
let cats = 0;
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[x].length; y++) {
      if(array[x][y] == "^^") {
        cats = cats + 1;
      }
    }
  }
  return cats;
}
