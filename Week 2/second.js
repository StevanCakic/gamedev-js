let canvas = document.querySelector("#canvas");

// za full canvas kazete da je canvas.width = window.innerWitdh, isto za height
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

let ctx = canvas.getContext("2d");

// ctx.fillStyle = "red"; // za sada po nazivu boje, staviti iznad fillRect
ctx.fillRect(50, 100, 100, 100);

// Zasto je rectangle crn (slajdovi)
// Kako da ga obojamo u neku drugu boju
// odkomentarisati liniju 8

ctx.fillStyle = "green"; // sta mislite kako da proradi, strokeStyle
ctx.strokeRect(200, 100, 150, 100);

// Crtanje kruga (slajdovi)
ctx.fillStyle = "blue";
ctx.beginPath(); // kasnije cemo pricati zasto
ctx.arc(420, 100, 50, 0, Math.PI * 2); // x i y centar kruga, radius (poluprecnik)
ctx.fill()

// Zasto krug ne lezi na istoj y koordinati, kao pravouganik i kvadrat?
// Treba da se izmijeni y koordinata, da ide nize za velicinu radiusa

ctx.strokeStyle = "yellow";
ctx.beginPath(); // kasnije cemo pricati zasto
ctx.arc(550, 150, 50, 0, Math.PI * 2); // x i y centar kruga, radius (poluprecnik)
ctx.stroke()

// crtanje cetvrtine kruga
ctx.fillStyle = "orange";
ctx.beginPath(); 
ctx.arc(650, 150, 50, 0, Math.PI / 2); 
ctx.lineTo(650, 150); // objasnicemo u nastavku
// ako zakomentarisete ovo lineTo, vidjecete da cete dobiti
// nesto sto nije cetvrtina kruga (opisano na slajdovima)
ctx.fill()