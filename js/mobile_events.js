"use strict"

document.addEventListener("DOMContentLoaded", () => {

    let box = document.querySelector(".box");
    box.addEventListener("touchmove", (e) => {
            e.preventDefault();
            console.log("touchmove");

        }
    )
    box.addEventListener("touchstart", (e) => {
            e.preventDefault();
            console.log("touchstart");
            console.log(e.touches);
        }
    )
    box.addEventListener("touchend", (e) => {
            e.preventDefault();
            console.log("touchend");
        }
    )

});