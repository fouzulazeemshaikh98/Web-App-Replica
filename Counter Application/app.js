
let counter = 0;

function increaseCount() {
    let a = document.getElementById("input");
    a.innerHTML = counter++
}

function decreaseCount() {
    let a = document.getElementById("input");
    a.innerHTML = --counter
}

function resetCount() {
    let a = document.getElementById("input");
    counter = 0
    a.innerHTML = counter;
}