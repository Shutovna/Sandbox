"use strict"
let deleteButton = function (e) {
    console.log(e.type);
    console.log(e.currentTarget);
    console.log(e.target);
    e.target.remove() ;
};

let counter = 1;

let buttonPlus = document.querySelector("#button_plus");
buttonPlus.addEventListener("click", function (e) {
        let newButton = document.createElement("button");
        newButton.classList.add("button_simple");
        newButton.addEventListener("click", deleteButton);
        newButton.innerHTML = `Button № ${counter++}`;
        let buttonsDiv = document.querySelector(".buttons__div");
        buttonsDiv.append(newButton);
    }, {once: true}
);

let buttonMinus = document.querySelector("#button_minus");
buttonMinus.addEventListener("click", function (e) {
        let lastButton = document.querySelector(".buttons__div button:last-child");
        lastButton.remove();

    }
);


let buttons = document.querySelectorAll(".button_simple");
buttons.forEach(item => {
    item.addEventListener("click", deleteButton)
});

document.querySelector(".buttons__div").addEventListener("click", deleteButton);

document.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault();
});
