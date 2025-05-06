// this = references the object or the window

// let user = {
//     name: "Aditya",
//     age: 27,
//     getDetails() {
//         const nestedArrow = () => console.log(this.name); // the value of this will be pointing to object user because getDetails is taking value of the user
//         nestedArrow();
//     }
// }

// user.getDetails();


// class user{
//     constructor(n){
//         this.name = n;
//     }

//     getName(){
//         console.log(this.name);   
//     }
// }

// const User = new user("Aditya");

// User.getName();

// const user = {
//     firstName: "Aditya!",
//     getName(){
//         const firstName = "Aditya";
//         return this.firstName;
//     }
// }

// console.log(user.getName());

// // Ques2:

// function makeUser(){
//     return {
//         name: "John",
//         ref(){
//             return this;
//         }
//     };
// }
// let u = makeUser();
// console.log(u.ref().name);


const user = {
    name: "Aditya",
    logMessage(){
        console.log(this.name);
    }
}

setTimeout(function(){
        user.logMessage();
}, 1000);




