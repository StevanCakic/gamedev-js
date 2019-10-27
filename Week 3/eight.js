let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(150, 150, 100, 0, Math.PI / 2);
ctx.lineTo(150, 150);
ctx.fill();
ctx.addHitRegion({id: "cetvrtina kruga"});

ctx.beginPath();
ctx.moveTo(400, 50);
ctx.lineTo(500, 250);
ctx.lineTo(300, 250);
ctx.fill();
ctx.addHitRegion({id: "trougao"});

canvas.addEventListener("mousemove", function(e) {
    if(e.region) {
        console.log(e.region + " is hit!");
    }
})