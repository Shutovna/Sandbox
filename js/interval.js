"use strict"

const box = document.querySelector(".box");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let timerId;
let idx = 1;
start.addEventListener("click", () => {
    timerId = setInterval(() => {
        let p = document.createElement("p");
        p.innerText = `paragraph ${idx++}`;
        box.append(p);
    }, 1000);
})

stop.addEventListener("click", () => {
    clearInterval(timerId);
});



