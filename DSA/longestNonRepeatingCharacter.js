/**
 * Given a string str, determine the length of the longest substring that does not contain any repeating characters.

A substring is any contiguous sequence of characters within a string. 
For example, the substrings of string abc are a, b, c, ab, bc, and abc. 
A substring is formed by selecting a starting and ending point without skipping characters in between.
 */

/**
 * @param {string} str
 * @return {number}
 */
export default function longestUniqueSubstring(str) {
    const map = {};
    let left = 0;
    let maxLen = 0;
  
    for (let right = 0; right < str.length; right++) {
      const char = str[right];
  
      if (map[char] >= left) {
        left = map[char] + 1;
      }
  
      map[char] = right;
      maxLen = Math.max(maxLen, right - left + 1);
    }
  
    return maxLen;
  }
  