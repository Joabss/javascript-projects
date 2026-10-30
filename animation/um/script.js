const startButton = document.getElementById("startButton");
const animatedElement = document.getElementById("animatedElement");
let isAnimating = true;

document.addEventListener("keydown", (event) => {
    if ((event.key === " " || event.key === "ArrowUp") && !isAnimating) {
        isAnimating = true;
        animatedElement.style.transform = "translateY(-200px)";
    }
});

document.addEventListener("keyup", (event) => {
    if ((event.key === " " || event.key === "ArrowUp") && isAnimating) {
        isAnimating = false;
        animatedElement.style.transform = "translateY(0)";
    }
});