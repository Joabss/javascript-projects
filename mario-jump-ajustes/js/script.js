const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
let isAnimating = true;

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioY = mario.style;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

    // const marioPosition = +window
    // .getComputedStyle(mario).getPropertyValue("bottom");
    var bottomValor = window.getComputedStyle(mario).getPropertyValue("bottom");
    console.log("Valor final do bottom: " + bottomValor);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;
        mario.src = "images/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";
        clearInterval(loop);
    }
}, 5);

mario.addEventListener("transitionrun", () => {
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");
    console.log(marioPosition);
    console.log(
        "Transition is running but hasn't necessarily started transitioning yet"
    );
});

document.addEventListener("keydown", (event) => {
    if ((event.key === " " || event.key === "ArrowUp") && !isAnimating) {
        isAnimating = true;
        mario.style.transform = "translateY(-200px)";
    }
});

document.addEventListener("keyup", (event) => {
    if ((event.key === " " || event.key === "ArrowUp") && isAnimating) {
        isAnimating = false;
        mario.style.transform = "translateY(0)";
    }
});
