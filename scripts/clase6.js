/*
const arrayA = ["Coder", 28, true];
console.log(arrayA);
*/

// let frutas = ["🍉", "🍊", "🍓", "🍒"];

// console.log(frutas[0]);

// Reemplazar un elemento del array
//frutas[3] = "🍏";

//Agregar elemento al array
//frutas[4] = "🥝";

//Recorriendo los valores de un array

/*
for (let index = 0; index <= 3; index++) {
    console.log(frutas[index]);
}
*/

// let frutas = ["🍉", "🍊", "🍓", "🍒", "🥥"];

//length

// console.log(frutas.length);

//Metodo para agregar elementos al final del array
//frutas.push("🥐");

//Metodo para agregar al principio del array

//frutas.unshift("🥗");

//Metodo para eliminar el ULTIMO elemento de un array

//frutas.pop();

//Metodo para eliminar el PRIMER elemento del array

//frutas.shift();

//Metodo SPLICE
// frutas.splice(2, 1);
//console.log(frutas.join("*"));

//let comidas = ["🍕", "🍔", "🌭"];

//let total = frutas.concat(comidas);

// console.log(total);

//EL METODO SLICE

//let frutas = ["🍉", "🍊", "🍓", "🍒", "🥥"];

//let copiaFrutas = frutas.slice(1, 3);

//METODO INDEXOF

// console.log(frutas.indexOf("🍓"));

//METODO INCLUDES

//console.log(frutas.includes("🧀")); // false

//METODO REVERSE
// frutas.reverse();

//console.log(frutas);
/*
const listaNombre = [];
let cantidad = 5;

do {
  let entrada = prompt("Ingrese nombre");
  listaNombre.push(entrada.toUpperCase());
  console.log(listaNombre);
} while (listaNombre.length != cantidad);
*/

//ELIMINAR DATOS DE ARRAY
/*
const nombres = ["Alvaro", "Santiago", "Francisco", "Paula"];

const eliminar = (nombre) => {
  let index = nombres.indexOf(nombre);

  if (index != -1) {
    nombres.splice(index, 1);
  }
};

eliminar("Santiago");

console.log(nombres);
*/
/*
const objeto1 = {
  id: 1,
  producto: "Monitor",
};

const arr = [objeto1, { id: 2, producto: "Mouse" }];
arr.push({ id: 3, producto: "Teclado" });

console.log(arr);
*/
/*
const carrito = [
  { id: 1, producto: "Monitor" },
  { id: 2, producto: "Teclado" },
  { id: 3, producto: "Mouse" },
];

for (const producto of carrito) {
  console.log(producto.id);
  console.log(producto.producto);
}

// console.log(carrito);
*/
