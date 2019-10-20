// Prvi korak je da uzmemo HTML element
let canvas = document.querySelector("#canvas");

// Da bi smo mogli da crtamo po canvasu treba nam jos nesto
// Koristicemo 2d, postoji i experimental-webgl i obicno se koristi za 3d

let ctx = canvas.getContext("2d");

// Sada cemo da isprobamo kako da nacrtamo pravougaonik
ctx.fillRect(10, 10, 100, 50); // x, y, width, height

// Nismo dobili ono sto smo željeli
// Pogledajmo sada šta je drawing surface (slajdovi)

// Problem rješavamo tako što stavimo width i height canvas 
// elementa isto kao i za CSS

/*
// code premjestiti tacno iznad ctx, da ispravite blur
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;*/

// Kako biste kreirali kvadrat?
// Pazite, ne zaboravite da stavite da je draw surface = canvas size
// Ako nije, dobice nesto sto nije kvadrat!
ctx.fillRect(150, 10, 100, 100); // x, y, width, height


// Pogledajmo sada 2d context(slajdovi)