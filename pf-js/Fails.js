

/*
function adivinaNumero() {
  const secreto = 12; // número definido por ti
  let intentos = 3;

  console.log("Juguemos a adivinar el número");

  for (let i = 0; i < intentos; i++) {
    let numUsuario = parseInt(prompt(`Intento ${i + 1}: Ingresa un número`));

    if (numUsuario === secreto) {
      console.log(`Felicidades, adivinaste el número secreto: ${secreto}`);
      return; // termina el juego si acierta
    } else {
      let intentosRestantes = intentos - (i + 1);
      console.log(`Incorrecto, te quedan ${intentosRestantes} intentos`);
      if (intentosRestantes === 0) {
        alert(`Fin del juego. El número secreto era ${secreto}`);
      }
    }
  }
}

adivinaNumero()

*/




function adivi () {

 let num = 2;  //este es el numero corrrecto
 let seguir = 0; // fin bucle
 let intentos = 3; //3 oportunnidades van en for

 do {  // Do ejecuta una ve afuerzs ideal para intentos
 
  alert("Juguemos a adivinar el numero")

  for( let i=0; i < intentos; i++) { // for maneja los intentos
 
    let numUsuario = parseInt(prompt(`Intento no. ${i + 1}, recuerda que es un no. entre 1 y 20`)); //parseint convierte string a valor entero (i + 1 ) menciona los

    if(numUsuario == num) { //si esta condicion se cumple se acaba todo

      alert(`Felicidades, adivinaste, es ${num}`);
     break  //para que ya lo termine por que atinaste

    } else {
  let intentosRestantes = intentos - (i + 1);
  console.log(`Incorrecto, te quedan ${intentosRestantes} intentos`);

    if( intentosRestantes == 0){


  console.log( `Fin del juego, suerte para la proxima el numero es ${num}`);
  seguir = parseInt (prompt(`¿Quieres jugar otra vez si o no ? :  1 es seguir , 0 , NO`))
 } //if


 }//Else
 

 } // For


 } // DO
while (seguir == 1) //hace que el bucle siga mientras pones 1 con esa condición
}  
adivi()  //termina funcion








/* para que sea un numero randmon


let num = Math.floor(Math.random() * 20) + 1; // número entre 1 y 20


Math.random() → número decimal entre 0 y 1.

* 20 → escala hasta 20.

Math.floor() → redondea hacia abajo.

+ 1 → asegura que el rango sea de 1 a 20.


*/