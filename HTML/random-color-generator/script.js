const btnRandomize = document.querySelector(".btnRandomize");

const color = document.querySelector(".color");

const body = document.querySelector("body");

let randomColor = () => {
    return Math.floor(Math.random() * 255);
};

console.log(randomColor());

btnRandomize.addEventListener("click", () => {
    let rColor = randomColor();
    let gColor = randomColor();
    let bColor = randomColor();
    color.textContent = `RGB: (${rColor}, ${gColor}, ${bColor})`;
    document.body.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
});

body.addEventListener("click", () => {
    navigator.clipboard.writeText(color.textContent);
    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.textContent = "Copied color value to clipboard!";
    body.appendChild(tooltip);
    setTimeout(() => {
        tooltip.remove();
    }, 500);
});