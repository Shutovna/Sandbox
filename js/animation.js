const movingBox = document.querySelector(".moving-box");
let pos = 0;


function boxAnimation() {
    pos++;
    movingBox.style.top = pos + "px";
    movingBox.style.left = pos + "px";

    if (pos < 270) {
        requestAnimationFrame(boxAnimation)
    }

}

let startAnimationBtn = document.querySelector("#start-animation");
startAnimationBtn.addEventListener("click", () => {
    pos=0;
    requestAnimationFrame(boxAnimation);
});