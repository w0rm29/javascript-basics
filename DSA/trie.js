class TrieNode {
    constructor() {
      this.children = new Map();
      this.word = false;
    }
  }
  
  export default class WordFinder {
    constructor() {
      this.trie = new TrieNode();
    }
  
    /**
     * @param {string} word
     */
    addWord(word) {
      let node = this.trie;
      for (const ch of word) {
        if (!node.children.has(ch)) {
          node.children.set(ch, new TrieNode());
        }
        node = node.children.get(ch);
      }
      node.word = true;
    }
  
    searchInNode(word, node) {
      for (let i = 0; i < word.length; i++) {
        const ch = word[i];
  
        if (ch === ".") {
          for (let child of node.children.values()) {
            if (this.searchInNode(word.substring(i + 1), child)) {
              return true;
            }
          }
          return false;
        }
  
        if (!node.children.has(ch)) {
          return false;
        }
  
        node = node.children.get(ch);
      }
  
      return node.word;
    }
  
    /**
     * @param {string} word
     * @returns {boolean}
     */
    search(word) {
      return this.searchInNode(word, this.trie);
    }
  }
  