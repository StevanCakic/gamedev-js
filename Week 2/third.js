let canvas = document.querySelector("#canvas");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

let ctx = canvas.getContext("2d");

// Crtanje path-a, stroke
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.moveTo(100, 200);
ctx.lineTo(50, 100);

ctx.strokeStyle = "red";
ctx.stroke();

// Crtanje path-a, fill
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(500, 100);
ctx.moveTo(400, 200); // nema nista? lineTo koristiti, slajdovi
ctx.lineTo(350, 100);

ctx.fillStyle = "blue";
ctx.fill();

// Circle
ctx.beginPath();
ctx.arc(650, 150, 50, 0, Math.PI / 2);
// ctx.lineTo(650, 150); slajdovi pa odkomentarisati ili ubaciti ovaj kod
ctx.fillStyle = "orange";
ctx.fill();
