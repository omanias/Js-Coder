/* let food = prompt("Que se te antoja?");

switch (food) {
  case "hamburguesa":
    console.log(`Pedido: ${food}`);
    break;
  case "pizza":
    console.log(`Pedido: ${food}`);
    break;
  case "lomo":
    console.log(`Pedido: ${food}`);
    break;
  default:
    console.log("ninguna de las opciones anteriores");
    break;
}
 */
//template literals
// back ticks => alt + 96 ``
/*
 case 6
case 12
default 18

let pelicula = prompt(`Elija una opcion:
1: Batman
2: Superman
3: Spiderman`);

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
    console.log("ninguna opcion es válida");
    break;
}
*/

/*

while (condicion){
    codigo - cuerpo del bucle
}



let i = 0;

while (i <= 3) {
    alert(i);
    i++;
}


let entrada = prompt("Ingrese texto o ESC para interrumpir");
let texto = "";

while (entrada != "ESC" && entrada != "esc") {
  texto += entrada + " ";
  entrada = prompt("Ingrese texto o ESC para interrumpir");
}

alert(texto);
*/

/*
do {
    cuerpo del bucle
} while (condicion)
*/

/* let y = 0;

do {
  console.log(`El valor de Y es : ${y}`);
  y++;
} while (y <= 10); */

/*
let x = 25;

do {
  alert(x);
  x++;
} while (x <= 30);
*/

/*
for (desde;hasta;actualizacion){
 Mientras dure el ciclo lo ejecutaré
}
*/

/*
for (let i = 0; i <= 10; i++) {
  alert(`El valor de I es: ${i}`);
}
*/

/*
let numero = parseInt(prompt("Ingrese su número"));

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
*/

//BREAK
/*
let suma = 0;

while (true) {
  let valor = +prompt("Ingrese un numero", " ");

  if (!valor) break;

  suma += valor;
}

alert("Suma: " + suma);
*/
/*
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }
  alert(`El valor de i es ${i}`);
}
*/

//CONTINUE
/*
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    continue;
  }
  alert(`El valor de i es ${i}`);
}
*/
