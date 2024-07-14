function factorial(n) {
    if(!Number.isInteger(n)) {
        return '';
    }
    if(n <= 0) {
        return 1;
    }

    return n * factorial(n-1);
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))