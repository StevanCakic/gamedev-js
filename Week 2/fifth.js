let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let image = new Image();
image.src = "../assets/game_image.jpg"

function drawRotateImage(ctx, image, x, y, width, height, rotation) {
    let halfWidth = width / 2;
    let halfHeight = height / 2;
    
    ctx.save();
    
    // pomjeranje do centra
    ctx.translate(x + halfWidth, y + halfHeight);

    // rotacija
    ctx.rotate(rotation);

    // skaliranje, uvecaj 2 puta po x i 2 puta po y osi
    ctx.scale(2, 2);
    
    // moramo da se vratimo na originalnu poziciju, zato -hw i -hh
    ctx.drawImage(image, -halfWidth, -halfHeight, width, height);

    ctx.restore();

}

/*
function draw(ctx, image) {
    
    // Boolean vrijednost koja nam govori da li je slika ucitana ili nije
    if (!image.complete){
        setTimeout(function() {
            draw(ctx, image);
        }, 50);
        return;
    }

    ctx.drawImage(image, 20, 20, 300,200);
    drawRotateImage(ctx, image, 450, 20, 300, 200, Math.PI/2);
}

*/

// Bolji nacin !
image.addEventListener("load", () => {
    ctx.drawImage(image, 20, 20, 300,200);
    drawRotateImage(ctx, image, 450, 20, 300, 200, Math.PI / 2);
})