let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

let ballRadius = 15;
let x = canvas.width / 2;
let y = canvas.height - 35;

// U ovom dijelu kreiramo paddle !
var paddleHeight = 20;
var paddleWidth = 150;
var paddleX = (canvas.width - paddleWidth) / 2;

// ball speed
let dx = 220;
let dy = -220;

// Two variables for storing information on whether the left or right control
// button is pressed.

let leftPressed = false;
let rightPressed = false;

// Brick drawing info
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 175;
let brickHeight = 50;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 150;

// create bricks
let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }; // status - da li blok treba da se crta ili ne
    }
}

// Draw score 
let score = 0

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Pozvati ovu funkciju u draw()
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// draw brick by brick
function drawBricks() {
    for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
            if(bricks[c][r].status == 1) { // novo, da li da se crta blok !
                let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

// da li se desila kolizija
function collisionDetection() {
    for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            // da li je blok iscrtan
            if(b.status == 1) {
                // detekcija kolizije
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0; // status promijeni na 0, kolizija
                    score++; // uvecaj score
                    if(score == brickRowCount * brickColumnCount) { // da li su svi blokovi unisteni
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

// crtaj score
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}
function draw(animationTime) {
    let deltaTime = (Date.now() - (animationTime || Date.now())) / 1000;
    let lastAnimationTime = Date.now();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();
    
    if(x > canvas.width - ballRadius || x < ballRadius) {
        dx = -dx;
    }

    if(y  > canvas.height - ballRadius || y < ballRadius) {
        dy = -dy;
    }
    // dio kojim se provjerava da li je loptica udarila paddle
    else if(y + ballRadius  > canvas.height - paddleHeight) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }
    
    x += (dx * deltaTime);
    y += (dy * deltaTime);

    // Ako je kliknuo desnu strelicu
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    // Ako je kliknuo lijevu strelicu
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    requestAnimationFrame(() => draw(lastAnimationTime))
}
// Two event listeners for keydown and keyup events. We want to run some code
// to handle the paddle movement when the buttons are pressed.
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// Two functions handling the keydown and keyup events  the code that 
// will be run when the buttons are pressed.
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}
draw();