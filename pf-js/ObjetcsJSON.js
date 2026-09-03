/**
 * 
 * 
 * 
 * objetos
    2. DOM (INTERFAZ)
    3. Manipulación de formularios
    4.
    4. Eventos
    5. Como renderizar cosas en pantalla
 * 
 * 
 */

// NUEVO TEMA 03/09/26 

/****
 *  objetos en JS (JSON)
 * 
 * Son una estructura de datos, similar a diccionarios
 * o mapas
 * 
 * ?Se organian en pares
 * ? Llave : valor asociado
 * ? Es una estructura de datos desordenada
 * ?Aqui los datos se obtienen mediante su llave
 * 
 * !! No son los mismos objetos que los de programación orientada a objetos
 * ? Las llaves no se pueden repetir
 *  https://fakestoreapi.com/products
 * 
 * 
 * Curiosidades
 * Esta notacion se volvio el estandar para intercambio de información
 * Entre cliente y servidor en la WEB
 * JSON (javascript object notation)
 *
 * 
 *   NOTA:
 *   TODAS LAS FUNCIONES POR DEFFECTO RETORNAN UNDIFINED
 * 
 * 
 * 
 */



// !COMO DECLARAR UN OBJETO!!!!!

const participante = {
    name: "Natalia",
    lastname: "Coca",
    age: 27,
    isAlive: true,
    SayHi: function() {
        console.log("Natalia dice Hola");
    },
    ch: 71,
}
// para Cambiar la visualización del JSon
// https://chromewebstore.google.com/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc


// COMO ACCEDER A ESOS VALORES
// 1. Notación punto
// 2. Notación corchete, el nombre va entre comillas como si fueran
// String
// NO OLVIDAR EL ${ Y BACKTICKS}
console.log(`El nombre del objeto es ${participante.name},
    obtenido con notación punto`);


//2 notación [""] siempre entre comillas
console.log(`La edad de la participante es ${participante["age"]}, 
    obtenido con notación corchete`);


    participante.SayHi();



    // Como agregar un nuevo par llave valor EN ARRAY USANDO[]

participante.favoriteAnimal =["Tortuga", "Gato", "Cuervo"];
console.log(participante);



// Agregar un nuevo objeto forma correcta SE USA {}
participante.adress = {
ZipCode: 55777,
Country : "Mexico",


}


// COMO ACCEDEMOS A LA INFORMACION DE OBJETOS
// O ARRAYS ANIDADOS (OBJETOS O ARRAYS // DENTRO DE ARRAY AL ULTIMO ¨[DENTRO LA POSICION DEL ARRAY]
//DENTRO DE OTRO OBJETO, U OTRO ARRAY)

console.log(
    `El primer animal favorita de ${participante.name} es ${participante.favoriteAnimal[0]}`,
);

// INGRESAR OBJETO PRINCPILA, SECUNDARIO Y LUEGO SECUNDARIO, 

console.log(
    `El codigo postal de ${participante.name} es ${participante.adress["ZipCode"]}`
);

//OTRA FORMA
console.log(`La ciudad de ${participante.name} es ${participante["adress"].Country}`,

);



//Como modificar el valor de una llavee
// BASTA CON VOLVER A PONER LA VARIABLE Y DAR NUEVO VALOR
participante.age = 25;
console.log(participante.age);

// ELIMINAR LLAVE

delete participante.ch;
console.log(participante);

/*
como iterar sobre el objeto 

Automatizar tareas repetitivas:
Automatizar tareas repetitivas:

Si un objeto representa configuraciones o parámetros, puedes recorrerlos para aplicarlos uno por uno sin escribir código repetido.
*/


for(const llave in participante) {

    console.log(`El valor de la llave ${llave} es  ${participante[llave]}`);
}
