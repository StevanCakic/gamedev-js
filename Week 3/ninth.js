let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let myRectangle = {
    x: 250,
    y: 70,
    width: 100,
    height: 50,
    borderWidth: 5
};

function drawRectangle(myRectangle, context) {
    context.beginPath();
    context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = myRectangle.borderWidth;
    context.strokeStyle = 'black';
    context.stroke();
}
function animate(myRectangle, canvas, context, startTime ) {
    // update
    var time = (new Date()).getTime() - startTime;
    var amplitude = 200;

    // in ms
    var period = 1000;
    var centerX = canvas.width / 2 - myRectangle.width / 2;
    var nextX = amplitude * Math.sin(time * 2 * Math.PI / period) + centerX;
    myRectangle.x = nextX;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw
    drawRectangle(myRectangle, context);

    // request new frame
    requestAnimationFrame(() => {
        animate(myRectangle, canvas, context, startTime);
    });
}

animate(myRectangle, canvas, ctx, 0)
