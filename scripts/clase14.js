/* console.log("Inicio del proceso");

setTimeout(() => {
  console.log("Mitad del proceso");
}, 2000);

console.log("Fin del proceso"); */

// LIFO // last in / first out

/* console.log("primero");

setTimeout(() => {
  console.log("segundo");
}, 0);

console.log("tercero");

setTimeout(() => {
  console.log("cuarto");
}, 0);

new Promise((resolve) => {
  resolve("promesa");
}).then(console.log);

console.log("ultimo");

function funcion() {
  console.log("funcion");
}

funcion(); */
/* 
setInterval(() => {
  console.log("Mostrando info");
}, 3000); */

/* const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;

  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

console.log(aplicarDescuento);

aplicarDescuento
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
 */

const productos = [
  { id: 1, nombre: "producto1", precio: 1000 },
  { id: 2, nombre: "producto2", precio: 1500 },
  { id: 3, nombre: "producto3", precio: 2000 },
];

const findProdById = (id) => {
  const prod = productos.find((item) => item.id === id);
  return new Promise((resolve, reject) => {
    if (prod) {
      resolve(prod);
    } else {
      reject("No se encuentra el producto");
    }
  });
};

findProdById(3)
  .then((prod) => console.log(prod))
  .catch((err) => console.log(err));
