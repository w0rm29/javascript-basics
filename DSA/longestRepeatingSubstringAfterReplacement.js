/**
 * Given a string str consisting of uppercase English letters and an integer k, determine the length of the longest substring that can be formed where all characters are the same. A maximum of k character replacements can be made to achieve this.

A substring is any contiguous sequence of characters within a string. For example, the substrings of string abc are a, b, c, ab, bc, and abc. A substring is formed by selecting a starting and ending point without skipping characters in between.
 */

/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
export default function longestSubstringReplacement(str, k) {
    let n = str.length;
    let left = 0,
      right = 0,
      maxF = 0,
      maxL = 0;
    const hash = new Array(26).fill(0);
  
    while (right < n) {
      const char = str[right];
      const charIndex = char.charCodeAt(0) - "A".charCodeAt(0);
      hash[charIndex] += 1;
      maxF = Math.max(maxF, hash[charIndex]);
      if (right - left + 1 - maxF > k) {
        const temp = str[left];
        const charIndexL = temp.charCodeAt(0) - "A".charCodeAt(0);
        hash[charIndexL] -= 1;
        left++;
      }
  
      maxL = Math.max(maxL, right - left + 1);
      right++;
    }
    return maxL;
  }
  