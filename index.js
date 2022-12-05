let count = 0;
let current;

function increment() {
    count++;

    document.getElementById("count-el").innerText = count;
}

let saveEl = document.getElementById("save-el");

function save() {
    current = count + " - ";
    saveEl.textContent += current;
    count = 0;
    document.getElementById("count-el").textContent = count;
}