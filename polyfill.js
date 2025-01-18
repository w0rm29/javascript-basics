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
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
};

// const nums = [1,2,3];

// const sum = nums.myReduce((acc, curr, i, nums) => {
//     return acc + curr;
// });

// console.log(sum);

// Question1: map vs forEach