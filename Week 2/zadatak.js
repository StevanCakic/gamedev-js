let canvas = document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

function drawCircle(x, y, r=50, start=0, end=Math.PI * 2){
    ctx.beginPath();
    console.log(x,y);
    ctx.fillStyle = "red";
    ctx.arc(x, y, r, start, end);
    ctx.fill();
}

for(let i=0; i < 20; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    drawCircle(x, y);
}