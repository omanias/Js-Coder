// OBJETOS
/*
const nombre = "Monitor de 24 pulgadas";
const precio = 300;
const disponible = true;
*/
// OBJETOS LITERALES
/*
const producto = {
  nombre: "Monitor de 24 pulgadas",
  precio: 300,
  disponible: true,
};
*/
// console.log(producto.disponible);
// console.log(producto["nombre"]);
/*
producto.imagen = "imagen.jpg";
producto.origen = "EEUU";
producto.disponible = false;

delete producto.precio;
// delete producto.disponible;

// console.log(producto);
*/
/*
//DESTRUCTURING

const { precio } = producto;

console.log(precio);
*/

//OBJECT CONSTRUCTOR
/*
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

const producto2 = new Producto("Teclado", 1000);
const producto3 = new Producto("Mouse", 500);

console.log(producto2);
console.log(producto3);
*/
//METODOS
/*
const nombre = "CoderHouse   ";

// console.log(nombre.trim());
// console.log(nombre.length);
// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());
*/

//METODOS PERSONALIZADOS

/*
function Cliente(nombre, edad, domicilio) {
  this.nombre = nombre;
  this.edad = edad;
  this.domicilio = domicilio;

  this.saludar = function () {
    console.log("SALUDOS " + this.nombre);
  };
}

const cliente1 = new Cliente("Coder", 26, "Av. publica s/n");
const cliente2 = new Cliente("House", 30, "Av. otra s/n");

cliente1.saludar();
cliente2.saludar();
*/

// CLASS DECLARATION
/*
class Cliente {
  constructor(nombre, acceso) {
    this.nombre = nombre;
    this.acceso = acceso;
  }
}

const coderhouse = new Cliente("Coder", "Aceptado");

console.log(coderhouse);
*/
/*
class Usuario {
  constructor(nombre, acceso) {
    this.nombre = nombre;
    this.acceso = acceso;
  }

  mostrarInfoAcceso() {
    return `Usuario: ${this.nombre}, tu acceso es ${this.acceso}`;
  }
}

const coderhouse = new Usuario("Coder", "Aceptado");

console.log(coderhouse.mostrarInfoAcceso());
*/
