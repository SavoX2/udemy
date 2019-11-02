const doWorkCallback = callback => {
    setTimeout(() => {
        // callback('This is my error', undefined);
        callback(undefined, [1, 4, 7]);
    }, 2 * 1000);
};

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error);
    }

    console.log(result);
});