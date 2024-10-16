let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let blue = Math.floor(Math.random() * 255);
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`
    document.querySelector("h3").innerHTML = color;
    document.querySelector("div").style.backgroundColor = color;
})