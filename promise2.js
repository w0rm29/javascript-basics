let p = new Promise((resolve, reject) => {
    let a = 1 + 3;
    if (a == 3) {
        resolve('Sucesss!!!');
    } else {
        reject('Failed!!');
    }
});

p.then((message) => {
    console.log('This is in then' + message);
}).catch((message) => {
    console.log('This is in catch' + message);
})



if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
        if (registrations) {
            registrations.forEach(function (registration) {
                registration.unregister().catch(function () { });
            });
        }
    }).catch(function () { });
}
