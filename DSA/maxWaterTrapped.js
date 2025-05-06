/**
 * Given an array walls of wall heights, calculate the maximum volume of water that will be trapped between two walls and the x-axis after a heavy downpour.
 */

/**
 * @param {number[]} walls
 * @return {number}
 */
export default function maximumWaterBetweenWalls(walls) {
    let left = 0;
    let right = walls.length - 1;
  
    let maxWater = 0;
  
    while (left < right) {
      const currentArea = (right - left) * Math.min(walls[left], walls[right]);
      maxWater = Math.max(maxWater, currentArea);
  
      if (walls[left] < walls[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxWater;
  }
  