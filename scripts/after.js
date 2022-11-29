/* //
let nombre;
let apellido;
let nota;
let i;

nombre = prompt("Escribe tu nombre");
apellido = prompt("Escribe tu apellido");
nota = parseInt(prompt("Escribe tu nota"));

alert(
  "Gracias: " + "" + nombre + " " + apellido + " - nota alcanzada: " + nota
);
 */
/* if (nota >= 7) {
  alert("Felicitaciones has Aprobado.");
} else {
  alert("Lamentablement has Desaprobado.");
}

for (let i = 7; i <= 10; i++) {
  alert(`Solo se APROBARÁ si tu nota es de: ${i}`);
} */
/* 
while (nota >= 7) {
  alert("Felicitaciones has Aprobado.");
  break;
}
 */
/*
function pedirDatos() {
  nombre = prompt("Escribe tu nombre");
  apellido = prompt("Escribe tu apellido");
  nota = parseInt(prompt("Escribe tu nota"));
  alert(
    "Gracias: " + "" + nombre + " " + apellido + " - nota alcanzada: " + nota
  );
}

pedirDatos();
*/
/*
let clienteNombre;
let pedido;
let comensales;
let resumen = [];
let i = 1;
let j = 0;
let papasExtra;

// inicia la compra
function iniciarCompra(par1) {
  clienteNombre = par1 = prompt("Ingrese su nombre");
  if (clienteNombre == "") {
    alert("Por favor ingresa al menos un nombre");
    iniciarCompra();
  } else if (clienteNombre == null) {
    alert("Hasta la próxima!!");
  } else {
    alert(`Bienvenido ${clienteNombre}!!
    
Vallamos a pedir algo para comer!`);
  }
  comensales = prompt("Cuantos comensales??");
  while (i <= comensales) {
    tipoDeComida();
    i++;
  }

  confirmaPedido();
  reinicio();
}

//selecciona el tipo de pedido
function tipoDeComida() {
  pedido = prompt(`
Menú ${i} de ${comensales}
  Quieres pedir:
1 - Hamburguesa
2 - Superpancho
3 - Pizza
Para salir presiona 0`);
  if (pedido == "1") {
    pedido = "Hamburguesa";
  } else if (pedido == "2") {
    pedido = "Superpancho";
  } else if (pedido == "3") {
    pedido = "Pizza";
  } else pedido = pedido;
  switch (pedido) {
    case "Hamburguesa":
      hamburguesa();
      break;
    case "Superpancho":
      superpancho();
      break;
    case "Pizza":
      pizza();
      break;
    case "0":
      break;
    default:
      alert("la opción ingresada no es válida");
      tipoDeComida();
  }
}

function hamburguesa() {
  detalleComida1 = prompt(`Bien, será una ${pedido}!
    1 - Simple (pan + hamburguesa + queso)
    2 - Especial (pan + hambuerguesa + lechuga + tomate)
    3 - Super (pan + hamburguesa + lechuga + tomate + huevo + panceta)
    Para volver al menú anterior presiona la "v"`);
  if (detalleComida1 == "1") {
    detalleComida1 = " simple";
  } else if (detalleComida1 == "2") {
    detalleComida1 = " especial";
  } else if (detalleComida1 == "3") {
    detalleComida1 = " super";
  } else if (detalleComida1 == "v") {
    tipoDeComida();
  } else;

  switch (detalleComida1) {
    case " simple":
      pedido += detalleComida1;
      gaseosa();
      break;
    case " especial":
      pedido += detalleComida1;
      gaseosa();
      break;
    case " super":
      pedido += detalleComida1;
      gaseosa();
      break;
    default:
      alert("La opción ingresada no es válida");
      hamburguesa();
      break;
  }
}

function superpancho() {
  detalleComida2 = prompt(`Bien, será un ${pedido}!
    1 - Simple (pan + salchicha)
    2 - Especial (pan + salchicha + huevo)
    3 - Mundial (pan + salchicha + huevo + batatas pai)
    Para volver al menú anterior presiona la "v"`);
  if (detalleComida2 == "1") {
    detalleComida2 = " simple";
  } else if (detalleComida2 == "2") {
    detalleComida2 = " especial";
  } else if (detalleComida2 == "3") {
    detalleComida2 = " mundial";
  } else if (detalleComida2 == "v") {
    tipoDeComida();
  } else;

  switch (detalleComida2) {
    case " simple":
      pedido += detalleComida2;
      gaseosa();
      break;
    case " especial":
      pedido += detalleComida2;
      gaseosa();
      break;
    case " mundial":
      pedido += detalleComida2;
      gaseosa();
      break;
    default:
      break;
  }
}

function pizza() {
  detalleComida3 = prompt(`Bien, será un ${pedido}!
    1 - Mozzarella(masa + salsa + mozzarella)
    2 - Especial (masa + salsa + jamon + mozzarella + morron + huevo)
    3 - Napo (masa + salsa + jamon + mozzarella + tomate + ajo + oliva)
    Para volver al menú inicial presiona la "v"`);
  if (detalleComida3 == "1") {
    detalleComida3 = " de mozzarella";
  } else if (detalleComida3 == "2") {
    detalleComida3 = " especial";
  } else if (detalleComida3 == "3") {
    detalleComida3 = " napo";
  } else if (detalleComida3 == "v") {
    tipoDeComida();
  } else;

  switch (detalleComida3) {
    case " de mozzarella":
      pedido += detalleComida3;
      gaseosa();
      break;
    case " especial":
      pedido += detalleComida3;
      gaseosa();
      break;
    case " napo":
      pedido += detalleComida3;
      gaseosa();
      break;
    default:
      break;
  }
}

//permite sumar gaseosa al pedido
function gaseosa() {
  conBebida = prompt(`Queres sumarle gaseosa?
    1 - Si, por favor!
    2 - No, gracias!
    Para volver al menú inicial presiona la "v"`);

  switch (conBebida) {
    case "1":
      tipoDeBebida();
      break;
    case "2":
      bebida = " sin bebida";
      pedidoCompleto();
      //papas();
      break;
    case "v":
      tipoDeComida();
    case null:
      break;
    default:
      alert("la opción ingresada no es válida");
      gaseosa();
      break;
  }
}

//selecciona el tipo de bebida
function tipoDeBebida() {
  bebida = prompt(`1 - Coca cola 500 cc
    2 - Sprite 500 cc
    3 - Fanta naranja 500 cc
    4 - Agua 500 cc
    Para volver al menú inicial presiona la "v"`);
  if (bebida == "1") {
    bebida = " 1 Coca de 500 cc";
  } else if (bebida == "2") {
    bebida = " 1 Sprite de 500 cc";
  } else if (bebida == "3") {
    bebida = " 1 Fanta de 500 cc";
  } else if (bebida == "4") {
    bebida = " 1 Agua de 500 cc";
  } else if (bebida == "v") {
    tipoDeComida();
  } else;
  switch (bebida) {
    case " 1 Coca de 500 cc":
      //alert(`Sale con una ${bebida}!`);
      //papas();
      pedidoCompleto();
      break;
    case " 1 Sprite de 500 cc":
      //alert(`Sale con una ${bebida}!`);
      pedidoCompleto();
      //papas();
      break;
    case " 1 Fanta de 500 cc":
      //alert(`Sale con una ${bebida}!`);
      //papas();
      pedidoCompleto();
      break;
    case " 1 Agua de 500 cc":
      //alert(`Sale con un ${bebida}!`);
      //papas();
      pedidoCompleto();
      break;
    case "v":
      tipoDeComida();
      break;
    default:
      alert("la opción ingresada no es válida");
      tipoDeBebida();
      break;
  }
}

//permite sumar papas al pedido
// function papas() {
//   if (j == 0){
//     papasExtra = "+ una porción papas sin cargo por ser tu primer compra!"
//     alert("Van de regalo unas papas por ser tu primer compra!!!");
//     pedidoCompleto()
//     j++;
//     console.log(j)
//   }else
//   pedidoCompleto()
// }

function pedidoCompleto() {
  resumen.push(pedido + bebida);
  // confirma = prompt(`${clienteNombre}, tu pedido quedó compuesto por:
  //  ${pedido}
  //  ${bebida}
}
function confirmaPedido() {
  confirma = prompt(`
    ${clienteNombre}, tu pedido quedó compuesto por:
    ${resumen}
    1 - confirmar
    
    Para cancelar presiona la "c"`);
  if (confirma == "1") {
    alert("Excelente!!! La próxima clase ajustamos el resto de los detalles!");
  } else if (confirma == "c") {
    reinicio();
  } else {
    alert("la opción ingresada no es válida");
    pedidoCompleto();
  }
}

function reinicio() {
  i = 1;
  resumen = [];
}
*/
/*
//Presentacion con una pregunta para el cliente
alert("Que desea llevar? para salir presione 0");

//Definimos las variables
let seleccionarProductos = Number(
  prompt("1-Taza $30 2-Vaso $150 3-Kindle $50000 4-Buda $6000")
);
let seleccionarCantidad;
let total = 0;
//Iniciamos el condicional para que el cliente pueda elegir el producto
while (seleccionarProductos != "0") {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es Taza, indique la cantidad")
        funcionTotal()
      );

      break;

    case 2:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es Vaso, indique la cantidad")
      );

      break;

    case 3:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es Kindle, indique la cantidad")
      );

      break;
    case 4:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es Buda, indique la cantidad")
      );

      break;
    default:
      break;
  }
  seleccionarProductos = Number(
    prompt("1-Taza $30 2-Vaso $150 3-Kindle $50000 4-Buda $6000")
  );

  // console.log(cantidad());
  //Le hacemos saber el costo total de la compra con un alert
  // alert("el total de la compra es de " + total);
}



let cantidad
let precio

function funcionTotal(){
  cantidad = seleccionarCantidad
  precio = seleccionarProductos
  total = cantidad * precio
  console.log(total)
}*/
/*
function numeroMayor(num1, num2) {
  switch (num1) {
    case num1 > num2:
      console.log(num1 + " es mayor que " + num2);
      break;
    case num1 < num2:
      console.log(num2 + " es mayor que " + num1);
      break;
    default:
      console.log(num1 + " y " + num2 + " son iguales");
      break;
  }
}

console.log(numeroMayor(2, 1));

function numeroMayor(num1, num2) {
  if (num1 > num2) {
    return num1 + " Es mayor";
  } else if (num1 < num2) {
    return num2 + "Es mayor";
  } else {
    return "Ambos son iguales";
  }
}

console.log(numeroMayor(15, 5));

*/
/*
let cliente = prompt("Buenos dias bienvenido a Gym Center, Ingrese su nombre");
let dinero = Number(
  prompt(
    `"Hola ${cliente}, tu suscripcion se encuentra caducada, para continuar debes ingresar el monto de $500"`
  )
);
let deudaTotal = 500;
//Aqui pagara su deuda o le rechazara el pago interrumpiendo la operacion
if (dinero >= deudaTotal) {
  alert(`Gracias ${cliente}, su pago se ha efectuado con exito`);
  mostrarRutinas();
} else {
  alert("Debes renovar tu suscripcion para continuar, buen dia");
}
//Funciones
function mostrarRutinas() {
  let dia = prompt(`${cliente} ¿Dime, en que dia estamos?: `);
  switch (dia) {
    case "lunes":
      alert(` ${cliente} en el dia de hoy tu rutina se basara en :
         Prebanca mancuerna 4 x 10
         Mariposa 4 x 10
         Prebanca inclinada maquina 4 x 12
         Extension mancuerna 4 x 12
         Patada Tricep 4 x 12
         Polea Triceps 4 x 12
         Escaladas 4 x 40
         Elevacion de piernas 4 x 20`);
      break;
    case "martes":
      alert(` ${cliente} en el dia de hoy tu rutina se basara en :
         Hoy es tu dia de descanso, recuerdalo`);
      break;
    case "miercoles":
      alert(` ${cliente} en el dia de hoy tu rutina se basara en :
         Polea al pecho 4 x 10
         Serrucho 4 x 10
         Convergente alto 4 x 12
         Curl Alt 4 x 10
         Scott 4 x 12
         Polea biceps 4x12
         Abdominales pelota 4 x 30
         Twit bolita 4 x 30`);
      break;
    case "jueves":
      alert(` ${cliente} en el dia de hoy tu rutina se basara en :
        Caminata tranquila de 4000 metros haciendo una breve pausa de 5 minutos, recuerda hidratarte.`);
      break;
    case "viernes":
      alert(` ${cliente} en el dia de hoy tu rutina se basara en :
        Sentadilla 4 x 10
        Prensa Frontal 4 x 10
        Camilla isquios 4 x 12
        Militar mancuerna 4 x 12
        Remo menton polea 4 x 12
        Combinado vuelos 4 x 10
        Lumbar pelota 4 x 20
        Puente frontal hasta el fallo hijo!`);
      break;
    case "sabado":
      alert(`CERRADO, merecemos un descanso`);
      break;
    case "domingo":
      alert(`CERRADO, bueno nos gusta mucho descansar`);
      break;
    default:
      alert(`"Ingrese un valor correcto ej: lunes, martes"`);
      break;
  }
}
*/
/*
for (let i = 1; i <= 20; i++) {
  // En cada repetición solicitamos un nombre.
  let ingresarNombre = prompt("Ingresar nombre");
  // Informamos el turno asignado usando el número de repetición (i).
  alert(" Turno  N° " + i + " Nombre: " + ingresarNombre);
}
*/
/*
let registro = Date.now();

console.log(registro);
*/
/*
function crearObjetoCuenta(nombre, apellido, saldo) {
  this.nombreCuenta = nombre = prompt("Ingrese su nombre");
  this.apellidoCuenta = apellido = prompt("Ingrese su apellido");
  this.saldoCuenta = saldo = parseInt(prompt("Ingrese el saldo de la cuenta"));

  this.mostrarCuenta = function () {
    return `Nombre: ${this.nombreCuenta}, Apellido: ${this.apellidoCuenta}, saldo: ${this.saldoCuenta}`;
  };
}

const cuenta1 = new crearObjetoCuenta();

console.log(cuenta1.mostrarCuenta());

function solicitarMonto() {
  let monto = parseInt(prompt("ingresar cantidad a pagar"));

  console.log("El monto a pagar es = " + monto);

  return monto;
}

function solicitarCuotas() {
  let cuotas = parseInt(prompt("En cuantas cuotas quiere pagar (de 1 a 12)"));
  
  return cuotas;
}

function solicitarCantidadPrestamos() {
  let prestamos = parseInt(
    prompt("Cuantos prestamos desea solicitar (de 1 a 5)")
    );
    
    return prestamos;
  }
  
  function dividir(monto, cuotas) {
    let resultado = monto / cuotas;
    
    return resultado;
  }
  
  let prestamos = solicitarCantidadPrestamos();

  if (!isNaN(prestamos) && 5 >= prestamos && prestamos > 0) {
  let i = 0;
  
  let iterar = true;
  
  while (i < prestamos && iterar) {
    i++;
    
    alert("Ingrese los datos del prestamo nro " + i + " de " + prestamos);

    let monto = solicitarMonto();

    if (isNaN(monto)) {
      alert("monto invalido");

      iterar = false;
    } else {
      let cuotas = solicitarCuotas();

      if (!isNaN(cuotas) && 12 >= cuotas && cuotas > 0) {
        let continuar = confirm("Desea el prestamo en " + cuotas + " cuotas?");

        if (continuar) {
          let valorCuota = dividir(monto, cuotas);

          alert("Usted debe pagar " + cuotas + " cuotas de " + valorCuota);
        } else {
          alert("Pago cancelado");
          
          iterar = false;
        }
      } else {
        alert("cantidad de cuotas invalidas");
        
        iterar = false;
      }
    }
  }
}






let nombre;

let apellido;

// let clase;

while(true){
  
  nombre = prompt(“Ingresa tu nombre”);
  
apellido = prompt(“Ingresa tu apellido”);

if ((nombre != “”) && (apellido != “”)) {
  
  alert (“Bienvenid@” + “ ” + nombre + “ ” + apellido + “ ” + “Selecciona las clases que queres tomar en la semana”);
  
  break;
  
} else {
  
  alert (“Error al ingresar datos”);
  
}

}

let clase \= prompt(`Selecciona la clase y el horario:

1: Yoga Funcional lunes y miercoles 19hs

2: Yoga Funcional martes y jueves 19hs

3: Acro Yoga martes y jueves 20hs

4: Anusara Yoga miercoles y viernes 10hs

5: Anusara Yoga miercoles y viernes 20hs`);

function seleccion() {

switch (clase){
  
  case “1”:
    
    return alert(`${nombre} seleccionaste la clase de Yoga Funcional, el lunes y miercoles a las 19hs`);
    
    case “2”:
      
      return alert(`${nombre} seleccionaste la clase de Yoga Funcional, el martes y jueves a las 19hs`);
      
      case “3”:
        
        return alert (`${nombre} seleccionaste la clase de Acro Yoga, el martes y jueves a las 20hs`);
        
        case “4”:
          
          return alert(`${nombre} seleccionaste la clase de Anusara Yoga, el miercoles y viernes a las 10hs`);
          
          case “5”:
            
            return alert(`${nombre} seleccionaste la clase de Anusara Yoga el miercoles y viernes a las 20hs`);
            
            default:
              
              return alert (“no haz seleccionado ninguna opcion, deberas actualizar la pag para volver a seleccionar”);
              
            }
            
          }

seleccion();

let socio \= prompt(“Sos soci@?”);

if (socio \== “si”) {
  
  alert (“No deberas pagar tu clase”);
  
} else {
  
  alert (“Deberas abonar $600”);
  
}

alert(“Muchas gracias por reservar tus clases de la semana!”);
*/
