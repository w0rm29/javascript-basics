/**
 * Given a matrix of size m x n, modify the matrix such that if an element is 0, its entire row and column are set to 0. The changes should be made in-place, i.e. directly to the original matrix.
 */

/**
 * @param {number[][]} matrix
 * @return {void}
 */
export default function matrixZeroing(matrix) {
    let isCol = false;
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for (let i = 0; i < rows; i++) {
      if (matrix[i][0] === 0) {
        isCol = true;
      }
      for (let j = 1; j < cols; j++) {
        if (matrix[i][j] === 0) {
          matrix[0][j] = 0;
          matrix[i][0] = 0;
        }
      }
    }
  
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  
    if (matrix[0][0] === 0) {
      for (let j = 0; j < cols; j++) {
        matrix[0][j] = 0;
      }
    }
  
    if (isCol) {
      for (let i = 0; i < rows; i++) {
        matrix[i][0] = 0;
      }
    }
  }
  