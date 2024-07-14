function createCounter() {
    let counter = 0;

    const myFunction = function () { debugger;
        counter = counter + 1; debugger;
        return counter; debugger;
    }

    return myFunction;
}

let increment = createCounter();
let c1 = increment();
let c2 = increment();
let c3 = increment();
console.log(c1, c2, c3);
console.log(typeof(NaN));