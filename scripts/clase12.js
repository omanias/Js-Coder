/* let num;

num = 1;

num++;

console.log(num); */

//Operador ternario

/* if (temperatura < 30) {
    console.log("Fresco");
} else {
    console.log("Caluroso");
} */
/* 
let temperatura;

temperatura = 40;

temperatura < 30 ? console.log("Fresco") : console.log("Caluroso");
 */
// console.log(temperatura);

//Operador &&

/* const cursos = [];

/* if (cursos.length === 0) {
  console.log("Sin cursos");
} */

//cursos.length === 0 && console.log("sin cursos");

// console.log(cursos); */

// Operador OR => ||

/* const usuario1 = {
  nombre: "Coder",
  edad: 25,
};

const usuario2 = null;

console.log(usuario1 || "El usuario no existe");
console.log(usuario2 || "El usuario no existe"); */

// console.log(usuario2);
/* 
console.log(0 || "f"); // "f"
console.log(null || "f"); // "f"
console.log(undefined || "f"); // "f"
console.log("" || "f"); // "f"
console.log(NaN || "f"); //"f"
console.log(false || "f"); // "f"
console.log(true || "f"); // true
console.log(50 || "f"); // 50
console.log("CoderHouse" || "f"); // CoderHouse */

/* let carrito;

let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

if (carritoLocalStorage) {
  carrito = carritoLocalStorage;
} else {
  carrito = [];
} */

// const carrito = JSON.parse(localStorage.getItem("carrito")) || []

/* const usuario = {
  nombre: "CoderHouse",
  cursando: true,
  curso: {
    entrega: "tercera",
  },
};

console.log(usuario?.curso?.desafios); */

/* const usuario = {
  nombre: "Coder",
  apellido: "House",
  edad: 25,
  cursando: true,
};

/* let nombre = usuario.nombre;
let cursando = usuario.cursando;
 */

/*const { apellido, edad } = usuario;

/* console.log(apellido);
console.log(edad); */

/* const nombres = ["Juan", "Mateo", "Roy"];

const [, , c] = nombres;

console.log(c); */

// Spread

/* const frutas = ["🍈", "🍋", "🍒"];
const bebidas = ["🧉", "☕", "🧃"];

const ambos = [...frutas, ...bebidas];

frutas.push(...bebidas);

console.log(frutas); */

/* const estudiante = {
  nombre: "juan",
  edad: 20,
};

const estudiante2 = {
  ...estudiante,
  cursando: true,
};

console.log(estudiante2); */
