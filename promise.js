// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         });
// }

// loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404


// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//         return response.json();
//     }
//     else {
//         throw new Error(response.status);
//     }
// }

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    // return fetch(url)
    //   .then(response => {
    //     if (response.status == 200) {
    //       return response.json();
    //     } else {
    //       throw new HttpError(response);
    //     }
    //   });
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new HttpError(response);
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {

    let user;
    while (true) {
        let name = prompt("Enter a name?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break; // no error, exit loop
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                // loop continues after the alert
                alert("No such user, please reenter.");
            } else {
                // unknown error, rethrow
                throw err;
            }
        }
    }

    alert(`Full name: ${user.name}.`);
    return user;
}

demoGithubUser();