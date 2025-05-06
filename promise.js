// // function loadJson(url) {
// //     return fetch(url)
// //         .then(response => {
// //             if (response.status == 200) {
// //                 return response.json();
// //             } else {
// //                 throw new Error(response.status);
// //             }
// //         });
// // }

// // loadJson('https://javascript.info/no-such-user.json')
// //     .catch(alert); // Error: 404


// // async function loadJson(url) {
// //     let response = await fetch(url);
// //     if (response.status == 200) {
// //         return response.json();
// //     }
// //     else {
// //         throw new Error(response.status);
// //     }
// // }

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }

// async function loadJson(url) {
//     // return fetch(url)
//     //   .then(response => {
//     //     if (response.status == 200) {
//     //       return response.json();
//     //     } else {
//     //       throw new HttpError(response);
//     //     }
//     //   });
//     let response = await fetch(url);
//     if (response.status == 200) {
//         let json = await response.json();
//         return json;
//     }
//     throw new HttpError(response);
// }

// // Ask for a user name until github returns a valid user
// async function demoGithubUser() {

//     let user;
//     while (true) {
//         let name = prompt("Enter a name?", "iliakan");

//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             break; // no error, exit loop
//         } catch (err) {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 // loop continues after the alert
//                 alert("No such user, please reenter.");
//             } else {
//                 // unknown error, rethrow
//                 throw err;
//             }
//         }
//     }

//     alert(`Full name: ${user.name}.`);
//     return user;
// }

// demoGithubUser();

// Promise = represents an upcoming success or faliure of an event

let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
});

// The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically

// console.log("Start");

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if(result) resolve("Subscribe");
//         else reject(new Error("Not Subscribed!"));
//     }, 2000);
// });

// console.log(sub);

// console.log("Stop!");

// Promise.all, Promise.race, Promise.any, Promise.allSettled

// Ques1

console.log("start");

const result = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
});

result.then((res) => console.log(res));

console.log("stop");

// Recursive Promises

function promRecur(funcProm){
    if(funcProm.length == 0) return;

    const currPromise = funcProm.shift();

    currPromise.then((res) => console.log(res)).catch((err)=>console.log(err));

    promRecur(funcProm);
}

// Promise polyfill

// TODO

// Promise.all polyfill

export default function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(iterable)) {
        return reject(new TypeError("Arguments should be array"));
      }
  
      let result = new Array(iterable.length);
      let completed = 0;
  
      if (iterable.length == 0) {
        return resolve(result);
      }
  
      iterable.forEach(async (promise, index) => {
        try {
          const value = await promise;
          result[index++] = value;
          completed++;
          if (completed === iterable.length) resolve(result);
        } catch (err) {
          reject(err);
        }
      });
    });
}

// Promise.any

function promiseAny(iterable){
    return new Promise((resolve, reject) => {
        if(iterable.length === 0){
            reject(new AggregateError([]));
        }

        let completed = 0;
        const results = new Array(iterable.length);

        iterable.forEach(async (promise, index) => {
            try{
                const value = await promise;
                resolve(value);
            }
            catch(err){
                results[index] = err;
                completed++;
                if(completed === iterable.length) reject(new AggregateError([]));
            }
        });
    });
}


