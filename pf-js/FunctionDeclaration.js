// FUNCIONES estudiar - FUNCTION DECLARATION
function saludar()  //Esta es la forma de iniciar function
{
console.log("Hola");

}


//Usar la función ( INVOCAR O LLAMAR) 

saludar();


//Se puede usar la funcion o llamar siempre


saludar()
saludar()
saludar()

function saludarConNombre(nombre, edad){
    console.log(`Hola ${nombre} mucho gusto 
        en conocerte no sabia que tenias ${edad} años`);
}


//pasando argumentos a una función 

saludarConNombre("Jose", 32);
saludarConNombre("Liz", 27);
saludarConNombre(27, "hola");


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// Function que retorna algo //expresiin es un valor que retorna un valor
// if declaracion

/**
 * ! importante
 * CUANDO USAMOS RETURN
 * ! TERMINA LA EJECUCIÓN DE LA FUNCIÓN
 * !EL VALOR RETORNADO DEBE SER OCUPADO O NUNCA VAMOS A VER
 * 
 * 
 * 
 */


function multipleToNumber(a,b){

            if(typeof a == "number" && typeof b == "number") { 

           return a * b; // FINALIZA EJECUCIÓN

            } else {
                return "por favor envia dos numeros";
            }
// lo que esta fuera de console no se ve (pero dentro de {})
            console.log("Nunca me vas a ver");

}



// AQui no voy a ver nada xq no tengo console?

multipleToNumber(2,3);

// imprimiendo el valor de retorno en consola
//va entre parentesis cuando se hace el console de la function
console.log(multipleToNumber(3,5)); //aqui se ve a*b despies de return se cumple (cumple el argumento?)
console.log(multipleToNumber(3, "josue")); //no se cumple ya que es a * Josue y no a*b (desues del return)
// por que cuando se usa return se termina la ejecucion de la funcion
//entonces el codigo que este por debajo de un return nunca se ejecuta