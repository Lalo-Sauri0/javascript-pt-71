/****
 *  * Switch
 * Estructura de control condicional
 * Pero a diferencia del if no se basa en valores de Verdad o falso
 * Se basa en OPCIONES (Lo compara entre las opciones programadas)
 * Nos permite obtener multiples opciones, con base la opcion seleccionada
 * ?Ejecuta el codigo
 * ?Tiene una respuesta por default, por si la opción 
 * ? ingresada no esta en la lita.
 * 
 * 
 * ? Se divide en casos
 * ? cada caso lleva su bloque de codigo y debe llevar al finalizar
 * ? la palabra break (ahi encuentra la salida y no sigue ejecutando el código)
 * 
 * todo : Expresiones : Es todo aquella que genera un valor
 * *Ejemplos : una suma, usar variable, usar una función, texto, usar número
 * 
 * todo : Declaraciones (statement:* No genera valor y por lo generar son estructuras de control bucles
 * 
 *(if, switch, for, while) 
 * 
 * 
 * 
 * 
 *  
 */
/*
Ejemplo practico
let month = prompt("Escribe el mes que te gustaria ver");
switch(month) {

    case "Enero":
        alert("El mes de enero es el primer mes de año");
        break;
    case "Febrero":
        alert(`El mes ${month} es el segundo mes del año`);  
      // "El mes" + month + "es el segundo mes del año" similar a concatencación
      // NO OLVIDAR LA VARIABLE ${AQUI VARIABLE}
      break;



      case "Marzo":
        alert(`El mes ${month} es el tercer mes del mes`);
        break;

        case "Abril":
        case "Marzo":
            console.log("Abril y Marzo");
            break;
            default:
                alert("El mes seleccionado no aplica");
}
*/
/* Template strings: Permiten commbinar (Menu de mcdonalds, menu starbucks, control de videojuegos)  ``  */

// 3. Dado el pais ingresado por el usuario, 
// devolver la capital de dicho pais - EJERCICIO de USO de SWITCH - practica!!!!!!!!
//` estas comillas `texto` funcionan mejor en prompts
let pais = prompt(`Escribe un pais de la siguientes opciones:
    1. Mexico 
    2. Peru
    3. Colombia
    4. Uruguay
    5. Paraguay
    6. Cuba
    7. Argentina`)

switch(pais) {


    case "Mexico":
        alert ("La capital es CDMX");
        break;

    case "Peru" :
        alert ("La capital es Lima");
        break;
    
    case "Colombia":
        alert(`La capital de ${pais} es Bogota`);
        break;    
    case "Uruguay":
        alert(`La capital de ${pais} es Montevideo`);
        break;    

    case "Paraguay":
        alert(`La capital de ${pais} es Asuncion`);
        break;     


    case "Cuba":
        alert(`La capital de ${pais} es Habana`);
        break;   
        
        
    case "Argentina":
        alert(`La capital de ${pais} es Buenos Aires`);
        break;     
    
        case "Estados unidos":
        alert(`La capital de ${pais} es Washington`);
        break;  
        
    case "Canada":
        alert(`La capital de ${pais} es Ottawa`);
        break;      
        
    default: //No olvidar los : despues de case o default
    alert("El pais seleccionado no aplica");
    


}