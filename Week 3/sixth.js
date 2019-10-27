let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let rectangles = [{x: 0, y:0, width:100, height: 100, color:"red", speed:60},
                  {x: 0, y:150, width:100, height: 100, color:"green", speed:120},
                  {x: 0, y:300, width:100, height: 100, color:"blue", speed:180},
                  {x: 0, y:450, width:100, height: 100, color:"yellow", speed:90}];

function update(rectangles, animationTime = 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let deltaTime = (Date.now() - (animationTime || Date.now())) / 1000;
    let lastAnimationTime = Date.now();
    for(rect of rectangles){
        rect.x += rect.speed * deltaTime;
        rect.y += rect.speed * deltaTime;
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
    window.requestAnimationFrame(function() {
        update(rectangles, lastAnimationTime);
    })
}
update(rectangles);