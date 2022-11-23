// FUNCIONES - SINTAXIS

/*

function mostrarMensaje (parametro1, parametro2){
  alert("¡Hola Coders!")
}

*/

/*
function mostrarMensaje() {
  console.log("¡Hola Coders!");
}

mostrarMensaje();

let nombre = "Coder";

console.log();
*/
/*
function sumar(primerNumero, segundoNumero) {
  let resultado = primerNumero + segundoNumero;
  return resultado;
}

console.log(sumar(7, 9));
*/

/*
let numero1 = Number(prompt("Ingrese un numero"));
let numero2 = Number(prompt("Ingrese otro numero"));

function suma(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = suma(numero1, numero2);

console.log(resultado);
*/

/*
function saludar(nombre, apellido) {
  console.log(`Saludos ${nombre} ${apellido}`);
}

saludar("Coder", "House");
saludar("Andres", "Pata");
saludar("Omar", "Manias");
*/
/*
//CALCULADORA

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
      return primerNumero - segundoNumero;
      break;
    case "*":
      return primerNumero * segundoNumero;
      break;
    case "/":
      return primerNumero / segundoNumero;
      break;
    default:
      return 0;
      break;
  }
}

console.log(calculadora(20, 30, "+"));
console.log(calculadora(20, 30, "-"));
console.log(calculadora(20, 30, "*"));
console.log(calculadora(20, 30, "/"));
console.log(calculadora(20, 30, " "));
*/

/*
//SCOPE O AMBITO DE LAS VARIABLES
// GLOBAL - LOCAL

let mensaje = "Otro mensaje";

function crearMensaje() {
  let mensaje = "Soy un mensaje";
}

console.log(mensaje);
*/

/*
iniciarApp();

function iniciarApp() {
  console.log("iniciando app...");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda funcion");
  usuarioAutenticado("CoderHouse");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando... Espere...");
  console.log(`Usuario Autenticado: ${usuario}`);
}
*/

//FUNCIONES ANONIMAS O AUTOINVOCADAS
/*
const suma = function (a, b) {
  return a + b;
};

console.log(suma(20, 30));
*/
/*
const aprendiendo = function () {
  console.log("Aprendiendo Javascript"); // return
};

const aprendiendo2 = () => "aprendiendo funciones flecha";

console.log(aprendiendo2());
*/

/*
const suma = (a, b) => {
  return a + b;
};

const resta = (a, b) => a - b;

console.log(suma(20, 50));
console.log(resta(30, 40));
*/
