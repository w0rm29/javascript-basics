// Currying: Currying is a function that takes one argument at a time and returns a new function expecting the next argument. 
// It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).

function f(a){
    return function(b){
        return `${a} ${b}`;
    };
}

console.log(f(5)(6));

function evaluate(operation){
    return function(a){
        return function(b){
            if(operation === "add") return a+b;
            else if(operation === "multiply") return a*b;
            else if(operation === "divide") return a/b;
            else if(operation === "substract") return a - b;
        };
    };
}

console.log(evaluate("add")(5)(6));

// Infinite currying
// add(2)(4)(3)()
function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    };
}

// Manipulating DOM
function updateElementHeader(id){
    return function(content){
        document.querySelector("#" + id).textContent = content;
    };
}

//const updateHeader = updateElementHeader("heading");
//updateHeader("Hello Aditya!!")

// curry() implementation
function curry(func){
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args);
        }
        else{
            return function(...next){
                return curriedFunc(...args, ...next);
            };
        }
    };
}

const sum = (a,b,c) => a+b+c;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3));