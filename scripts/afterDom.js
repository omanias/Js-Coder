//Variable con el elemento del DOM
let nombreForm = document.querySelector("#nombre");
let correoForm = document.querySelector("#correo");

//Eventos
nombreForm.addEventListener("input", function () {
  // console.log(nombreForm.value);
  if (nombreForm.value === "") {
    console.log("Ingrese un nombre válido");
  }
});

correoForm.addEventListener("input", function () {
  // console.log(correoForm.value);
  if (correoForm.value === "") {
    console.log("Ingrese un correo electrónico válido");
  }
});

let formulario = document.querySelector("#formulario");

let info = document.querySelector(".info");

//agregar informacion al DOM
const pintarInfo = formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  info.innerHTML = `
  <div class="alert alert-warning" role="alert">
<h5> Muchas gracias ${nombreForm.value} por tu mensaje, te responderemos a ${correoForm.value} para concretar detalles de tu compra.</h5></div>`;
});

//////---------PRODUCTOS DOM-------------//////

//Seleccionando productos para verlos en DOM

//Lee el contenido del HTML al que le dimos click y extrae la información del producto
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    leerDatosProducto(e.target.parentElement);
  });
});

//Array vacio para guardar los productos
let articulosCarrito = [];

function leerDatosProducto(producto) {
  const infoProducto = {
    titulo: producto.querySelector(".card-title").textContent,
    texto: producto.querySelector(".card-text").textContent,
    id: producto.querySelector(".btn").getAttribute("data-id"),
  };

  //Agrega elementos al carrito
  articulosCarrito = [...articulosCarrito, infoProducto];
  // console.log(articulosCarrito);

  //LLamo a la funcion para mostrar los productos en el carrito
  carritoHTML();
}

//Mostrar los productos en el carrito
const carrito = document.querySelector("#carrito");

function carritoHTML() {
  //Limpiar el HTML
  limpiarHTML();

  articulosCarrito.forEach((producto) => {
    const row = document.createElement("p");
    row.innerHTML = `
    <div class="container">
    <h5>${producto.titulo}</h5>
    <p>${producto.texto}</p>
    <button class="btn btn-danger" id="${producto.id}">Eliminar</button>
    </div>
    `;
    carrito.appendChild(row);
  });
}

function limpiarHTML() {
  carrito.innerHTML = "";
}

carrito.addEventListener("click", eliminarProducto);

// Eliminar productos del carrito

function eliminarProducto(e) {
  if (e.target.classList.contains("btn-danger")) {
    let productoID = e.target.getAttribute("id");
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id !== productoID
    );
    carritoHTML();
  }
}

////--------OPCIONES MULTIPLES--------------//////

let optionSelected = document.querySelectorAll(".form-select");
let btnreservar = document.querySelector(".btn-reservar");

btnreservar.addEventListener("click", function () {
  let dia = document.querySelector("#day").value;
  let hora = document.querySelector("#hr").value;

  let selector = document.querySelector(".selector");
  selector.innerHTML = `
  <div class="alert alert-success" role="alert">
  <h5>Vas a asistir el dia ${dia} a las ${hora} hs.</h5>
  </div>`;
});
