const animatedElement = document.getElementById("animatedElement");
let isAnimating = false;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && !isAnimating) {
        isAnimating = true;
        animatedElement.classList.add("animation");
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp" && isAnimating) {
        isAnimating = false;
        animatedElement.classList.remove("animation");
    }
});