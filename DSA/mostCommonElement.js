/**
 * Given an array of integers numbers and a number k, find the k most frequent numbers in the array. 
 * Here, k represents the number of elements that should be returned, which are the ones that appear the most frequently. The order of the result does not matter.
 */

/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
export default function mostCommonElements(numbers, k) {
    let freqMap = {};
  
    for (let i = 0; i < numbers.length; i++) {
      freqMap[numbers[i]] = (freqMap[numbers[i]] || 0) + 1;
    }
  
    const buckets = new Array(numbers.length + 1).fill(null).map(() => []);
  
    for (let num in freqMap) {
      const freq = freqMap[num];
      buckets[freq].push(Number(num));
    }
  
    const result = [];
  
    for (let i = buckets.length - 1; i >= 0 && k > 0; i--) {
      if (buckets[i].length > 0) {
        for (const num of buckets[i]) {
          result.push(num);
          k--;
          if (k === 0) break;
        }
      }
    }
    return result;
  }
  