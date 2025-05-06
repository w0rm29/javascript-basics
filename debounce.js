// Create a debounce polyfill
const myDebounce = ((cb, d) => {
    let timer = null;

    return function(...args){
        clearInterval(timer);
        timer = setTimeout(() => {
            cb(this, ...args);
        }, d)
    };
});

const debounceCount = myDebounce(() => {
    // Some stuff
}, 800);
