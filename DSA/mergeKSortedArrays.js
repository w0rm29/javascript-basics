class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(val) {
      this.heap.push(val);
      this.heapifyUp();
    }
  
    remove() {
      if (this.heap.length === 0) return null;
      const root = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.heapifyDown();
      }
      return root;
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      }
    }
  
    heapifyDown() {
      let index = 0;
      const length = this.heap.length;
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let smallest = index;
  
        if (leftChildIndex < length && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
          smallest = leftChildIndex;
        }
  
        if (rightChildIndex < length && this.heap[rightChildIndex][0] < this.heap[smallest][0]) {
          smallest = rightChildIndex;
        }
  
        if (smallest === index) break;
  
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      }
    }
  }
  
  function mergeKSortedArrays(arrays) {
    const minHeap = new MinHeap();
    const result = [];
  
    // Insert the first element of each array along with the array index and element index
    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i].length > 0) {
        minHeap.insert([arrays[i][0], i, 0]); // [value, arrayIndex, elementIndex]
      }
    }
  
    // Process the heap and extract the minimum element
    while (minHeap.heap.length > 0) {
      const [value, arrayIndex, elementIndex] = minHeap.remove();
      result.push(value);
  
      // If the array has more elements, insert the next one into the heap
      if (elementIndex + 1 < arrays[arrayIndex].length) {
        minHeap.insert([arrays[arrayIndex][elementIndex + 1], arrayIndex, elementIndex + 1]);
      }
    }
  
    return result;
  }
  
  // Test the function
  const arrays = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  
  console.log(mergeKSortedArrays(arrays));
  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  