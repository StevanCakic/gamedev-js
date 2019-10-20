let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
let radius = 50;

// Kreirati 20 krugova na random pozicijama na Canvasu
function drawCircle(x, y, radius, start=0, end=2 * Math.PI){
    ctx.beginPath();
    ctx.arc(x, y, radius, start, end);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "blue";
    ctx.fill();
}

for(let i = 0; i < 20; i++) {
    let x = Math.ceil(Math.random() * canvas.width);
    let y = Math.ceil(Math.random() * canvas.height); 
    drawCircle(x, y, radius);
}