// Flatten

export default function flatten(value) {
    return value.reduce(
      (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
      [],
    );
  }

const arr = [1, 2, [3, 4]];

// console.log(flatten(arr));


// Type Utilites - II

function isObject(value){
    if(value === null){
        return false;
    }

    const ty = typeof value;
    return ty === 'object' || ty === 'function';
}


function isPlainObject(value){
    if(value === null){
        return false;
    }

    const prototype = Object.getPrototypeOf(value);

    return prototype === null || prototype === Object.prototype;
}

// Data Merging

/*

[
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

*/

function mergeData(sessions){
    if(sessions.length === 0){
        return;
    }

    const result = [];
    const userData = {};

    sessions.forEach((user, duration, equipment) => {
        if(!userData[user]){
            userData[user] = {
                user,
                duration,
                equipment: new Set(equipment),
            }
            result.push(user);
        }
        else{
            userData[user].duration += duration;
            equipment.forEach((eq) => userData[user].equipment.add(eq));
        }
    });

    return result.map((user) => ({
        user,
        duration: userData[user].duration,
        equipment: Array.from(userData[user].equipment).sort()
    }));
}


// getElementByClassName

function isSubset(a, b){
    return Array.from(a).every((value) => b.contains(value));
}

function getElementsByClassName(element, className){
    const elements = [];

    const classNameSet = new Set(className.trim().split(" "));

    function traverse(el){
        if(el === null){
            return;
        }

        if(isSubset(classNameSet, el.classList)){
            elements.push(el);
        }

        for(const child of el.children){
            traverse(child);
        }
    }

    for(const child of element.children){
        traverse(child);
    }
}


// ====================

// merge two sorted arrays
// arr1 = [1,2,3] arr2 = [4,5,6]

function mergeArrays(arr1, arr2){
    let len1 = arr1.length;
    let len2 = arr2.length;

    let m = 0, n = 0, i=0;

    let results = new Array(len1+len2);
    let lastVisited = null;

    while(m < len1 && n < len2){
        let val;
        if(arr1[m] < arr2[n]){
            val = arr1[m];
            m++;
        }
        else if(arr1[m] > arr2[n]){
            val = arr2[n];
            n++;
        }
        else {
            val = arr1[m];
            m++;
            n++;
        }

        if(val !== lastVisited){
            results[i++] = val;
            lastVisited = val;
        }
    }

    while(m < len1){
        if(lastVisited !== arr1[m]){
            results[i] = arr1[m];
            i++;
            m++;
        }
    }
    while(n < len2){
        if(lastVisited !== arr2[n]){
            results[i] = arr2[n];
            i++;
            n++;
        }
    }
    return results.slice(0,i);
}

console.log(mergeArrays([1,2,2], [2,3,4]));

// programming language


function implementLanguage(commands){
    const map = {};
    let result = 0;
    let i = 0;

    function execute(command){
        let c = command.split(" ");
        if(c[0] === "ADD"){
            result = result + Number(c[1]);
        }
        else if(c[0] === "MUL"){
            result = result * Number(c[1]);
        }
    }

    while(i < commands.length){
        let [op, value] = commands[i].split(" ");
        if(op === "FUN"){
            while(i < commands.length && commands[i] !== "END"){
                if(!map[value]) map[value] = [];
                map[value].push(commands[i]);
                i++;
            }
            i++;
        }
        else if(op === "INV"){
            for(let cmd of map[value]){
                execute(cmd);
            }
        }
        else{
            execute(commands[i]);
        }
        i++;
    }
    return result;
}

const value = ["ADD 5", "MUL 4", "FUN INCREMENT", "ADD 1", "MUL 0", "END", "MUL 3", "INV INCREMENT"];

//console.log(implementLanguage(value));


// Given an array, return an array where the each value is the product of the next two items: E.g. [3, 4, 5] -> [20, 15, 12]

function multiplyByTwo(arr){
    let result = new Array(arr.length);
    result.fill(1);
    arr.forEach((item, index) => {
        result[index] = arr[(index+1)%arr.length]*arr[(index+2)%arr.length];
    });
    return result;
}

//console.log(multiplyByTwo([3, 4, 5]));


/**
 * Given a list of points, find out if any four of them form a square. Return 'true' if possible, else 'false'.
    Examples: [[0, 0], [2, 0], [1, 1], [0, -1], [-1, -1], [0, 2], [0, 1], [1,0]] -> true
 */

// Check for balanced brackets in a string.

function isBalanced(value){
    let stack = [];

    const brackets = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };

    for(let char in value){
        if(brackets[char]){
            stack.push(brackets);
        }
        else if(Object.values(brackets).includes(char)){
            const last = stack.pop();
            if(brackets[last] !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
}

// console.log(isBalanced("{[()]}"));    // true
// console.log(isBalanced("{[(])}"));    // false
// console.log(isBalanced("((()))"));    // true
// console.log(isBalanced("{[}"));       // false



const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  for(let i=0; i<lines.flat().length; i++){
    const [x,y,z] = lines[i];
    console.log(x);
    console.log(y);
    console.log(z);
  }

//   console.log(lines.flat());


function canMake24(nums) {
    // All the possible mathematical operations
    const operators = ['+', '-', '*', '/'];
  
    // Helper function to perform a safe operation
    const applyOperation = (a, b, operator) => {
      switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : Infinity; // avoid division by zero
        default: return NaN;
      }
    };
  
    // Helper function to evaluate all possible ways of combining numbers
    const evaluate = (nums) => {
      if (nums.length === 1) {
        return Math.abs(nums[0] - 24) < 0.0001; // Check if the result is approximately 24
      }
  
      for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
          if (i !== j) {
            const newNums = nums.filter((_, index) => index !== i && index !== j);
            for (const operator of operators) {
              const result = applyOperation(nums[i], nums[j], operator);
              if (evaluate([...newNums, result])) {
                return true;
              }
            }
          }
        }
      }
      return false;
    };
  
    // Generate all permutations of the array
    const permute = (arr) => {
      if (arr.length === 0) return [[]];
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const permutations = permute(remaining);
        for (const perm of permutations) {
          result.push([arr[i], ...perm]);
        }
      }
      return result;
    };
  
    // Generate all permutations and check each
    const permutations = permute(nums);
    for (const perm of permutations) {
      if (evaluate(perm)) {
        return true;
      }
    }
  
    return false;
  }
  
  // Test cases
  console.log(canMake24([4, 1, 8, 7])); // true
  console.log(canMake24([1, 2, 1, 2])); // false

  
  // Reverse a double-linked list

  function reverseDoublyLinkedList(head) {
    let current = head;
    let temp = null;
  
    // Traverse the list and reverse the links
    while (current !== null) {
      // Swap the next and prev pointers
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
  
      // Move to the next node (which is now previous)
      current = current.prev;
    }
  
    // If the list is not empty, the last node will be the new head
    if (temp !== null) {
      head = temp.prev;
    }
  
    return head;
  }
  