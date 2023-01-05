/* let numero;

numero = 1;

numero++;

console.log(numero); */

// let temperatura = 40;

/* if (temperatura > 35) {
  console.log("Hace calor");
} else {
  console.log("Templado");
} */

//OPERADOR TERNARIO

// temperatura > 35 ? console.log("Hace calor") : console.log("Templado");

/* let edad = prompt("edad", 18);

let mensaje =
  edad <= 10
    ? "Niño"
    : edad <= 18
    ? "Adolescente"
    : edad <= 30
    ? "Adulto"
    : "edad inusual";

alert(mensaje); */

//OPERADOR &&

//Solo si la condicion es verdadera

// const carrito = [];

/* if (carrito.length === 0) {
  console.log("Sin productos");
} */

// carrito.length===0 && console.log("No hay productos")

//OPERADOR || - OR

/* const usuario1 = {
  nombre: "Gabriel",
  edad: 30,
};

const usuario2 = null;

console.log(usuario1 || "El usuario no existe");
console.log(usuario2 || "El usuario no existe"); */

/* console.log(0 || "F"); //F
console.log(null || "F"); //F
console.log(undefined || "F"); //F
console.log("" || "F"); //F
console.log(NaN || "F"); //F
console.log(false || "F"); //F
console.log(true || "F"); //true
console.log(50 || "F"); // 50
console.log("Hola mundo" || "F"); //Hola mundo */

// let carrito;

/* let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

if (carritoLocalStorage) {
  carrito = carritoLocalStorage;
} else {
  carrito = [];
} */

// let carrito =JSON.parse(localStorage.getItem("carrito")) || []

//ACCESO CONDICIONAL A UN OBJETO

/* const usuario = {
  nombre: "Franco",
  edad: 25,
  cursos: {
    javascript: "En curso",
  },
};

console.log(usuario?.cursos?.html || "La propiedad no existe"); */

//DESESTRUCTURACION DE OBJETOS

/* const usuario = {
  nombre: "Franco",
  edad: 25,
}; */

/* console.log(usuario.nombre);
console.log(usuario.edad);
console.log(usuario.domicilio); */

/*let nombre = usuario.nombre;

console.log(nombre); */

/* const { nombre, edad } = usuario;

console.log(nombre);
console.log(edad); */

//DESESTRUCTURACION DE ARRAYS

/* const alumnos = ["Franco", "Maite", "Gabriel", "Marianela"];

const [, , c, d] = alumnos;

console.log(c); */

// console.log(Gabriel);

//SPREAD OPERATOR ARRAYS

/* const frutas = ["🍉", "🍒", "🍊", "🍐"];
const bebidas = ["🥤", "☕", "🍹", "🥂"];

const ambos = [...frutas, ...bebidas];

frutas.push(...bebidas);

console.log(frutas); */

//SPREAD OPERATOR OBJETOS

/* const usuario = {
  nombre: "Franco",
  edad: 25,
};

const usuario2 = {
  ...usuario,
  curso: "js",
};

console.log(usuario2); */
