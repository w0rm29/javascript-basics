// Map -> item.map(())

// Array.prototype.myMap = function(cb){
//     let temp = [];
//     for(let i=0; i<this.length; i++){
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// }

// const arr = [1,2,3];

// const multiplyByTwo = arr.myMap((num, i, arr) => {
//     return num*2;
// });

// console.log(multiplyByTwo);

// ====================================================================

// Filter

Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

const nums = [2,3,4,5]

const greaterThanFour = nums.myFilter((nums) => {
    return nums > 4;
});

console.log(greaterThanFour);

// ==============================================

// Reduce

Array.prototype.myReduce = function(cb, acc){
    let temp = acc;
    for(let i=0; i<this.length; i++){
        if(temp !== undefined){
            temp = cb(undefined, this[i], i, this);
        }
        else{
            temp = this[i];
        }
    }
    return temp;
}

// =======================================================

// call

Function.prototype.myCall = function(context={}, ...args){
    if(typeof this !== 'function'){
        return;
    }
    context.fn = this; // any function points to the context
    context.fn(...args);
}

function sayHi(name){
    console.log("${name}")
}

console.log()

