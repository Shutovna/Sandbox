"use strict"

function f(a, b, ...c) {
    console.log(a, b, c)
}

f(1, 345, 'qwe', 'asd', 'gsdsdf','gsdsdf')

function f2(a, b, c) {
    console.log(a, b, c)
}

let a = [1, 2, 3]
f2([...a]);

let b = {
    name: "qwe",
    age: 23,
    sex: true
}

let c = {...b};

f2({...b})
