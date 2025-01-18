// first class functions : can be treated as a variable
function square(num){
    return num * num;
}

function displaySquare(fn){
    console.log("Square is " + fn(5));
}

displaySquare(square);

// IIFE: 
(function(nums){
    console.log(nums * 2);
})(5);

(function(x){
    return (function(y){
        console.log(x);
    })(2);
})(1);

// function scope
// using let => o/p will be 0,1,2,3,4 because let has a block scope
// using var => o/p will be 5,5,5,5,5 because var does not has a block scope
for(let i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}

//function hoisting: function declaration is hoisted to the top of the scope during the compilation phase. 
// Function expressions (assigning a function to a variable) are not hoisted in the same way.

console.log(square(5)); // 25

function square(n) {
  return n * n;
}

var x = 21;

function fn(){
    console.log(x);
    var x = 20;
}

fn();

// O/p = undefined => because the variable x in fn() is in local score because of function hoising. The fn variables is hoisted in the local scope

// Spread v/s Rest operators: these operators should be the last parameters

function multiply(...nums){ // rest operator
    return nums[0]*nums[1];
}

var nums = [5, 6];
console.log(multiply(...nums)); // spread operator

// Callback Function: map, reduce, filter, setTimeout 
// http://callbackhell.com/

document.addEventListener('click', function(params){
    // event listeners
});

// Arrow functions v/s Normal Functions

// 1. Syntax:
function square(num) {
    return num*num;
};

const square = (num) => {
    return num*num;
};

// 2. Implicit return keyword
const square = (num) => num*num;

// 3. arguments
function fn(){
    return arguments;
}
const fn = () => console.log(arguments);

fn(1,2,3,4);

// 4. "this" keyword
// arrow functions point to the Window
// normal functions point to the local defined objects


