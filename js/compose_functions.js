"use strict"

function compose(...functions) {
    return function (n) {
        let res = n;
        for (let i = functions.length - 1; i >= 0; i--) {
            res = functions[i](res);
        }
        return res;
    }
}

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const discount = compose(normalizePrice, divide100, multiply20);
//40
console.log("Discount: " + discount(200.0));

function composeWithArgs(...functions) {
    return function (...args) {
        let res;
        for (let i = functions.length - 1; i >= 0; i--) {
            if (res) {
                res = functions[i](res);
            } else {
                res = functions[i](...args);
            }
        }
        return res;
    }
}

const add1 = function (a) {
    return a + 1
}
const addAll3 = function (a, b, c) {
    return a + b + c
}
console.log(composeWithArgs(add1, addAll3)(1, 2, 3)); //=> Вернет 7