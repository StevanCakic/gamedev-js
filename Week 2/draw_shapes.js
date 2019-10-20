// Create canvas
let canvas = document.getElementById("myCanvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

// Create rectangle
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 200, 200);

// Create stroked rectangle
ctx.strokeStyle = "red";
ctx.strokeRect(220, 10, 200, 200);

// Create circle
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.arc(100, 350, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(250, 350, 50, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

// Create path
ctx.beginPath();
ctx.moveTo(100,500);
ctx.lineTo(200,500);
ctx.strokeStyle = "blue";
ctx.stroke();
ctx.closePath();