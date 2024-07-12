function findMaxNumber(a, b, c, d) {
    if (arguments.length !== 4) {
        return 0;
    }

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != 'number') {
            return 0;
        }
    }

    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

console.log(findMaxNumber(1, 5, 6.6, 11)); //=>  11

console.log(findMaxNumber(1, 5, '6', '10')); // =>  0