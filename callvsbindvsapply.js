// Call = The call() method of Function instances calls this function with a given this value and arguments provided individually. (MDN Docs)
 
// var obj = {name: "Aditya"};

// function sayHello(age){
//     console.log("Hello " + this.name + " " + age + " age");
// }

// console.log(sayHello.call(obj, 27));

// Apply - The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object). (MDN Docs)

 
// var obj = {name: "Aditya"};

// function sayHello(age){
//     console.log("Hello " + this.name + " " + age + " age");
// }

// console.log(sayHello.apply(obj, [27]));

// Bind = The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, 
// and a given sequence of arguments preceding any provided when the new function is called. (MDN Docs)

// var obj = {name: "Aditya"};

// function sayHello(age){
//     console.log("Hello " + this.name + " " + age + " age");
// }

// let bindFunc = sayHello.bind(obj);

// console.log(bindFunc(27));

// Ques 1.

const person = {name: "Aditya"}

function sayhi(age){
    return `${this.name} is ${age}`; 
}

console.log(sayhi.call(person, 27));
console.log(sayhi.bind(person, 27));

// Ques 2

// const age = 10;

// var person = {
//     name: "Aditya",
//     age: 27,
//     getAge: function(){
//         return this.age;
//     }
// };

// var person2 = {age: 30};
// console.log(person.getAge.call(person2)); // 30 = because the call is applied to the person2 object which has age 30

// Ques 3.

// const animals = [
//     {species: "Lion", name: "King"},
//     {species: "Whale", name: "Queen"}
// ];

// function printAnimals(i){
//     this.print = function(){
//         console.log("#" + i + " " + this.species + " " + this.name);
//     };
//     this.print();
// }

// for(let i=0; i<animals.length; i++){
//     printAnimals.call(animals[i], i);
// }

// Ques 4: Append an array to another array

const array = ['a', 'b'];
const elements = [1, 2, 3];

array.push.apply(array, elements);

console.log(array);

// Ques 5. finc min/max in array(use build-in bind)

const numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers));


// Ques 6. Bound function

// function f(){
//     console.log(this);
// }

// let user = {
//     g: f.bind(null)
// };

// user.g();

// Ques 7. Bing chaining
// function f(){
//     console.log(this.name);
// }

// f = f.bind({name:"John"}).bind({name:"Ann"});

// f(); // John - because bind chaining does not exit. Once the function is binded to a object it does not change its value

// Quest 8. bind

// function checkPassword(success, failed){
//     let password = prompt("Password?", "");
//     if(password == "beardbytes") success();
//     else failed();
// }

// let user = {
//     name: "Aditya Maheshwari",
    
//     loginSuccessfull(){
//         console.log(`${this.name} logged in`);
//     },

//     loginFailed(){
//         console.log(`${this.name} failed to login`);
//     },
// };

// checkPassword(user.loginSuccessfull.bind(user), user.loginFailed.bind(user));

// Polyfills - call

// Function.prototype.myCall = function(context = {}, ...args){
//     if(typeof this!='function'){
//         throw new Error(this + "Its not callable");
//     }
//     context.fn = this;
//     context.fn(...args);
// }

// let car = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price){
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
// }

// purchaseCar.myCall(car, "$", 300000);

// Polyfill - apply

// Function.prototype.myCall = function(context = {}, args = []){
//     if(typeof this!='function'){
//         throw new Error(this + "Its not callable");
//     }

//     if(!Array.isArray(args)){
//         throw new TypeError("Not an Array");
//     }

//     context.fn = this;
//     context.fn(...args);
// }

// let car = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price){
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
// }

// purchaseCar.myCall(car, ["$", 300000]);

// Polyfill - Bind

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this!='function'){
        throw new Error(this + "cannot be binded as its not callable");
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs);
    };
}

let car = {
    color: "Red",
    company: "Ferrari",
};

function purchaseCar(currency, price){
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

const newFunc = purchaseCar.myBind(car);

console.log(newFunc("$", 300000));