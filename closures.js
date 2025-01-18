// scope : current context of your code
// lexical scope: Lexical scope defines the accessibility of variables and functions depending on their location in the source code

var user = "Rockstarr"

// global scope
function display(){
    // local scope
    console.log(user);
};

display();

// Error
// function error(){
//     // local scope
//     var username = "Rockstarr"
// };

// console.log(username);
// error();

// closures: Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope
// in js, whenever we make a function it binds itself to its enviornment or its lexical scope

function subscribe(){
    var name = "Ragnorok";
    // closure
    function displayName(name){
        console.log(name);
    }
    displayName(name);
};

subscribe();

// closure scope chain - A nested function's access to the outer  function's scope includes the enclosing 
// scope of the outer function—effectively creating a chain of function scopes. 

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// Ques 1. What will be the o/p
let count = 0;
(function (){
    if(count == 0){
        let count = 1; // shadowing
        console.log(count);
    }
    console.log(count);
})();

// Ans:
// 1
// 0

// Ques 2. Write a function that will allow you to do this
var addSix = createBase(6);
addSix(10); // 16
addSix(21); // 27

function createBase(six){
    return (function addSix(num){
        console.log(num + six);
    });
    addSix(10);
    addSix(27);
};

createBase(6);

// Ques 3. Time optimisization
function find(){
    let a = [];
    for(let i=0; i<100000; i++){
        a[i] = i*i;
    }
    return (function(index){
        console.log(a[index]);
    });
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12")
closure(12);
console.timeEnd("12");


