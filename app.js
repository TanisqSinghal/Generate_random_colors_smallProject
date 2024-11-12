let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let body = document.querySelector("body")

btn.addEventListener("click", () => {
    let gettingrandomcolors = getrandoncolors();
    h3.innerText = gettingrandomcolors;
});

function getrandoncolors() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
    return color;
}