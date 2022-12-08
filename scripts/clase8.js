/*
let elemento;

elemento = document;
elemento = document.body;
elemento = document.head;
elemento = document.images;
elemento = document.scripts;

console.log(elemento);
*/

//METODO TRADICIONAL
/*
let navbar = document.getElementsByTagName("nav");
let contenedor = document.getElementsByClassName("container-products");
let nombreForm = document.getElementById("nombre");

console.log(nombreForm);
*/

//METODOS MODERNOS

/* let brand = document.querySelector(".navbar-brand"); */
/*
let boton = document.querySelector("button");
let correo = document.querySelector("#correo");
let parrafos = document.querySelectorAll("p");
*/
/*
let brand = (document.querySelector(".navbar-brand").textContent =
  "NUEVO ENCABEZADO");

let enlace = document.querySelector(".enlace");
enlace.remove();

console.log(enlace);
// console.log(brand);
*/
/*
let agregado = document.createElement("h5");

agregado.innerHTML = "Agregando elemento nuevo";

document.body.appendChild(agregado);
*/

// let carrito = document.querySelector("#carrito");
/*
let agregarInput = document.createElement("input");

agregarInput.setAttribute("type", "text");
agregarInput.setAttribute("placeholder", "Ingrese texto");
document.querySelector("#carrito").appendChild(agregarInput);
*/

/* let nuevoBoton = document.createElement("button");
nuevoBoton.setAttribute("class", "btn btn-danger");
nuevoBoton.setAttribute("id", "botoncito");
nuevoBoton.textContent = "Agregar al carrito";

document.querySelector("#carrito").appendChild(nuevoBoton); */
/*
let alumnos = ["Francisco", "Natalia"];

let listaVacia = document.querySelector("#carrito");

for (let a of alumnos) {
  let listado = document.createElement("li");
  listado.innerHTML = a;
  listaVacia.appendChild(listado);
}*/

let cursos = [
  { titulo: "Desarrollo web", precio: 1000 },
  { titulo: "Javascript", precio: 2000 },
];

for (let c of cursos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `
    <h3>Curso: ${c.titulo}</h3>
    <p>Precio: ${c.precio}</p>
    <button class= "btn btn-success">Agregar</button>
    <button class= "btn btn-danger">Eliminar</button>
    `;

  document.body.appendChild(contenedor);
}
