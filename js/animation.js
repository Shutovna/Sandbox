const movingBox = document.querySelector(".moving-box");

function startAnimation() {
    let pos = 0;
    let timer2Id = 0;
    movingBox.style.top = "0px";
    movingBox.style.left = "0px";

    setTimeout(move, 100);

    function move() {
        if (pos === 280) {
            clearInterval(timer2Id)
        } else {
            movingBox.style.top = pos + "px";
            movingBox.style.left = pos + "px";
            pos += 10;
            timer2Id = setTimeout(function () {
                move();
            }, 10)
        }

    }

}

let startAnimationBtn = document.querySelector("#start-animation");
startAnimationBtn.addEventListener("click", ()=> {
    startAnimation();
});