let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    isHitBy(x, y){
        let distance = Math.sqrt(Math.pow(x -this.x, 2) + Math.pow(y-this.y,2));
        return distance <= this.radius;
    }
}

class Rectangle {
    constructor(x,y,width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    isHitBy(x,y){
        return (x >= this.x && x <= this.x + this.width) &&
            (y >= this.y && y <= this.y + this.height); 
    }
}

let circle1 = new Circle(150, 150, 100);
let rect1 = new Rectangle(350, 50, 100, 200);

//crtanje kruga
ctx.beginPath()
ctx.arc(circle1.x, circle1.y, circle1.radius, 0, 2*Math.PI);
ctx.fill()

//crtanje pravougaonik
ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);

canvas.addEventListener("mousemove", function(e) {

    if(circle1.isHitBy(e.pageX, e.pageY)) {
        console.log("You touch the circle");
    }
    if(rect1.isHitBy(e.pageX, e.pageY)) {
        console.log("You touch the rectangle");
    }
})