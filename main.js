// setTimeout(() => {
//     alert("Hello, world!");
// }, 3000);

// setInterval(() => {
//     alert("This will repeat every 6 seconds");
// }, 6000);


// const date = new Date();
// console.log(date.getHours(), date.getMinutes(), date.getSeconds());


let chasyi = document.querySelector("#hours");
let minuta = document.querySelector("#minutes");
let sekund = document.querySelector("#seconds");

function vremya(){
    let date = new Date();
    let chas = date.getHours();
    let min = date.getMinutes();
    let sek = date.getSeconds();

    chasyi.firstChild.textContent = chas + " ";
    minuta.firstChild.textContent = min + " ";
    sekund.firstChild.textContent = sek + " ";

    document.querySelectorAll(".label").forEach(label => {
        label.classList.add("show");
    });
}
setInterval(vremya, 1000);
