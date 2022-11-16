/*


if (condicion){
    bloque verdadero
} else{
    bloque falso
}



OPERADORES LÓGICOS

=== estrictamente igual (por el valor y tipo de dato)
!== estrictamente distinto (por valor y tipo de dato)
> mayor que
< menor que

>= mayor o igual
<= menor o igual

&& and
|| or




let puntaje = 1000;

if (puntaje >= 1000) {
    console.log("Sos el ganador");
} else {
    console.log("Perdiste");
}

let dinero = 400;
let totalAPagar = 500;

if (dinero > totalAPagar) {
    console.log("Compra realizada");
} else {
    console.log("Fondos insuficientes");
}


let dinero = 600;
let totalAPagar = 500;
let tarjeta = false;

if (dinero > totalAPagar) {
    console.log("Puedo comprar con efectivo");
} else if (tarjeta) {
    console.log("Puedo comprar porque tengo tarjeta");
} else {
    console.log("Fondos insuficientes");
}


let efectivo = 300;
let credito = 200;
let disponible = efectivo + credito;
let totalAPagar = 600;

if (
    efectivo > totalAPagar ||
    credito > totalAPagar ||
    disponible > totalAPagar
    ) {
        console.log("Podemos comprar");
    } else {
        console.log("No podemos comprar");
    }

    




TABLAS
Tabla de la verdad del operador &&

X | Y | X && Y
T | T | T
T | F | F
F | T | F
F | F | F

La expresion solo es verdadera cuando ambos son verdaderos

let a = 10;
console.log(a > 5 && a < 20);

Tabla de la verdad del operador OR

X | Y | X || Y
T | T | T
T | F | T
F | T | T
F | F | F

La expresion solo es verdadera si alguno de los dos operandos o ambos son verdaderos

let a = 8

console.log ((a<5)||(a>15))



let a = "5";
let b = 5;


let nombreAlumno = prompt("Ingrese nombre del alumno");
let apellidoAlumno = prompt("Ingrese apellido del alumno");

if (nombreAlumno === "") {
    console.log("Necesitas un nombre de usuario ");
} else if (apellidoAlumno === "") {
    console.log("Necesitas el apellido");
} else {
    console.log(nombreAlumno + " " + apellidoAlumno);
}

let number = false;

console.log(typeof number);
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = parseInt(prompt("ingrese su edad"));

if (edad > 18) {
    console.log(nombre + apellido + " podes pasar");
} else {
    console.log(nombre + apellido + " no podes pasar porque sos menor");
}


let socio = prompt("Usted es socio?");
let importe = parseFloat(prompt("ingrese importe"));
let descuento = parseFloat(prompt("ingrese Descuento"));
let calculo = (importe * descuento) / 100;
let total = importe - calculo;

if (socio == "si") {
    console.log(" Usted tiene descuento");
    alert("Tu total a pagar es " + total);
} else {
    console.log("no tiene descuento, debe abonar el total ");
    alert("El total a pagar es: " + importe);
}

*/
