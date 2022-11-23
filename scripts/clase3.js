/*
switch (){


}

*/
/*
let food = prompt("Que se le antoja?");

switch (food) {
  case "hamburguesa":
    console.log(`vas a cenar ${food}`);
    break;
  case "pizza":
    console.log(`vas a cenar ${food}`);
    break;
  case "lomo":
    console.log(`vas a cenar ${food}`);
    break;
  default:
    console.log("Ninguna de las opciones anteriores");
    break;
}
*/

// Template literals
// `` backtics => alt + 96

/*
let pelicula = prompt(`Elija una pelicula:
1: Batman
2: Superman
3: Spiderman
`);

switch (pelicula) {
  case "1":
    console.log("Batman");
    break;
  case "2":
    console.log("Superman");
    break;
  case "3":
    console.log("Spiderman");
    break;
  default:
    console.log("ninguna de las anteriores");
    break;
}
*/

//CICLO WHILE

/*

while (condicion){
  "cuerpo del bucle"
}

*/

/*
let i = 0;

while (i <= 3) {
  alert(i);
  i++;
}

*/
/*
let entrada = prompt("Ingrese un texto o ESC para interrumpir");
let texto = "";

while (entrada != "ESC" && entrada != "esc") {
  texto += entrada + " ";
  entrada = prompt("Ingrese un texto o ESC para interrumpir");
}

alert(texto);
*/

//CICLO DO... WHILE
/*

do{
  cuerpo del bucle
} while(condicion)


*/

/*
let y = 25;

do {
  console.log(`El valor de Y es: ${y}`);
  y++;
} while (y < 30);
*/

// CICLO FOR

/*
for (desde;hasta;actualizacion){
  cuerpo del bucle
}
*/

/*
for (let i = 0; i <= 5; i++) {
  alert(`El valor de I es: ${i}`);
}
*/

/*
let numero = parseInt(prompt("Ingrese un numero"));

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
*/

/* for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // Rompe la ejecucion del bucle
  }
  alert(`El valor de i es: ${i}`);
} */

/*
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    continue; // continúa la ejecucion del bucle
  }
  alert(`El valor de i es: ${i}`);
}
*/
