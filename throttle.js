// Throttle function
const myThrottle = ((cb, d) => {
    let later = 0;
    let waitingArgs;

    return function(...args){
        // if throttle is called again within d interval, it does nothing
        if(later) {
            waitingArgs = args;
            return;
        }

        const timeoutFunc = () => {
            // after d interval later is set to 0, so that we can again use throttling
            setTimeout(() => {
                if(waitingArgs == null){
                    later = 0;
                }
                else{
                    cb(...waitingArgs);
                    waitingArgs = null;
                    setTimeout(timeoutFunc, d);
                }
            }, d);
        };

        let now = new Date().getTime();
        if(now - later < d) return;
        last = now;
        cb(...args);
        setTimeout(timeoutFunc, d);
    };
});