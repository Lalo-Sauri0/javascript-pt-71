/**
 * 
 *! Callbacks!
 * 
 * 
 * Funciones /recetas echa y lo hace,  metodos
 * 
 * 
 *  funcion accion de algo (para lograr algo)
 * 
 * 
 * ! Es una funcion que se pasa como argumento 
 * ! a otra funcion, para ser ejecutada en el momento
 * ! que la funcion que recibe el callback lo decida
 * 
 * 
 * el argumento de la funcion es otra funcion 
 * para ser usada dentro del argumento 
 *   
 * 
 * Function Ref o call back para documentaciopn
 * fetch api
 * Funciones que reciben callbacks
 * 
 * ? funciones ciudadanos de primera clase
 * * Todas las funciones son tratadas como si fueran un valor
 * 
 * 
 *  https://www.geeksforgeeks.org/javascript/what-is-first-class-citizen-in-javascript/
 * 
 * 
 */

 function procesarPago(nombreCliente, Callback, cuenta) {
       const saldoAPagar = Callback(cuenta); //esta parte es esencial
       console.log(`El cliente ${nombreCliente} debe pagar
        ${saldoAPagar} despues de impuestos`);
   

 }

//calback se aplica cuando se llama despues de function

/**
 * 
 *  Opciones para la funcion de callback
 * 
 * 1. Crear una funcion aparte y luego como mandarla como argumento.
 * 
 *  Divide todo en funciones para no tener una funcion gigamte
 */



function addIVA(cuenta){
return cuenta * 1.16;


}


procesarPago("Jose", addIVA, 2000);



// Procesar pago con function anonima, 2 ejempls , uno con function y otro con arrow function.
// no se puede ocupar

console.log("----------------Callback con function anonima----");

procesarPago (
"Carlos",
function (cuenta) {

return cuenta * 1.2;
}, 2000,

);



// arrow function

console.log("------Callback con arrow function-----");

procesarPago("Javier", (cuenta)  =>  cuenta * 1.3, 2000);

// vvariable temporal puedes cambiar el nombre despues de procesar pago

