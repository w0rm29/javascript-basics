// map
Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    return temp;
};

// const nums = [1,2,3];

// const multiplyByThree = nums.myMap((nums, i, arr) => {
//     return nums*3;
// });

// console.log(multiplyByThree);

// filter
Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this))
            temp.push(this[i]);
    }
    return temp;
};

// const nums = [1,2,3];

// const greaterThanThree = nums.myFilter((nums) => {
//     return nums > 2;
// });

// console.log(greaterThanThree);

// reduce
// arr.reduce((acc, curr, i, arr) => {}, initialValue)

Array.prototype.myReduce = function(cb, initialValue){
    var acc = initialValue;
    
    for(let i=0; i<this.length; i++){
        if(acc !== undefined){
            acc = cb(undefined, acc, this[i], i, this);
        }
        else{
            acc = this[i];
        }
    }
    return acc;
};

// const nums = [1,2,3];

// const sum = nums.myReduce((acc, curr, i, nums) => {
//     return acc + curr;
// });

// console.log(sum);

// Question1: map vs forEach

  

/* Polyfills to do:

    1) Promise.all, Promise.any
    2) Call, Apply, bind
    3) map, filter, reduce
    4) debounce, throttle
    5) currying

*/

/*
    Interview Questions:
        1) Array flatten
        2) Closures
        3) Promises
        4) Accordian
        5) Data Merge
        6) Pub/Sub
        7) Deep Clone
        8) map vs forEach

*/