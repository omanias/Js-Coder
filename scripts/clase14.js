/* setTimeout(() => {
  console.log("Hola mundo");
}, 5000); */

/* console.log("inicia el proceso");

setTimeout(() => {
  console.log("Mitad del proceso");
}, 3000);

console.log("fin del proceso"); */

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

console.log("Ultimo");

function funcion() {
  console.log("funcion");
}

funcion(); */
/* 
const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = false;
  if (descuento) {
    resolve("descuento aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

// then - catch

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
  { id: 2, nombre: "producto2", precio: 2000 },
  { id: 3, nombre: "producto3", precio: 3000 },
];

const buscarID = (id) => {
  const prod = productos.find((item) => item.id === id);

  return new Promise((resolve, reject) => {
    if (prod) {
      resolve(prod);
    } else {
      reject("No se ha encontrado el producto");
    }
  });
};

buscarID(5)
  .then((prod) => console.log(prod))
  .catch((err) => console.log(err));
