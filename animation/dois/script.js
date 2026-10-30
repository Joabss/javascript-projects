const startButton = document.getElementById("startButton");
const animatedElement = document.getElementById("animatedElement");
let isAnimating = false;

startButton.addEventListener("mousedown", () => {
    if (!isAnimating) {
        isAnimating = true;
        animatedElement.classList.add("animation");
    }
});

startButton.addEventListener("mouseup", () => {
    if (isAnimating) {
        isAnimating = false;
        animatedElement.classList.remove("animation");
    }
});

startButton.addEventListener("mouseleave", () => {
    if (isAnimating) {
        isAnimating = false;
        animatedElement.classList.remove("animation");
    }
});
