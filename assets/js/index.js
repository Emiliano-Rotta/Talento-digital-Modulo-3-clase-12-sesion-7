//Clase pasada

//Metodos de String

// replaceAll -- replace -- trimStart -- trimEnd 

//replaceAll: Remplaza todas las coincidencias

// Sintaxis: variabre.replaceAll("palabra remplazada", "nueva palabra" )

//replace: Remplaza la primera coincidencias

// Sintaxis: variabre.replace("palabra remplazada", "nueva palabra" )

//-----------------------------
// Trim() elimina los espacios.. Elimina los primeros espacios y los últimos
// trimStart().. Elimina los primeros espacios
// TrimEnd().. Elimina los últimos espacios

//Sintaxis: stringAModificar.trim()
//Sintaxis: stringAModificar.trimStart()
//Sintaxis: stringAModificar.TrimEnd()



//-----------------------------------------------------
//                   Clase de Hoy clase 12 sesion 7
//-----------------------------------------------------


// SEPARADOR NUMÉRICO: con el "_" puedo separ números, haciendolos mas facil de leer y comprender, sin que afecte el dato.
// const presupuestoAnual = 1000000000;
// const presupuestoAnualDos = 1_000_000_000;
// console.log(presupuestoAnual)
// console.log(presupuestoAnualDos)



//------------------------------------------------------
// OPERADOR DE FUSIÓN NULA 

//es un operador lógico que devuelve el operando del lado derecho cuando el del lado izquierdo es nulo o indefinido y, de lo contrario, devuelve el operando del lado izquierdo.

// const nombre = null ?? "Jerson";
// console.log(nombre)
// const nombreDos = undefined ?? "Rodolfo";
// console.log(nombreDos)
// const nombreTres = "Brandon" ?? "Bernarda";
// console.log(nombreTres)

//-------------------------------------------------------------
//OPERADORES LÓGICOS DE ASIGNACIÓN


// let saludo = "Hola Buen día";
// saludo ||= "Hola buenas tardes"

// console.log(saludo)

// let alumno = {
//     nombre: "Carlos",
//     apellido: "Duran"
// }

// alumno.apellido &&= "Palape"
// console.log(alumno)



// let saludo = "Hola Buen día";
// saludo &&= "Hola buenas tardes"

// console.log(saludo)


//Operador de asignacion de fusion nula ??= 

// let dimensiones = {
//     altura: 50,
//     // ancho: 10
// }
// dimensiones.ancho ??= 35
// console.log(dimensiones)

// let dimensionesDos = 58
// dimensionesDos ??= 33.7;
// console.log(dimensionesDos);


// OPERADOR DE ENCADENAMIENTO OPCIONAL

// const pacienteVeterinario = {
//     dueño: 'Ghiselle',
//     mascota: {
//     tipo: 'gato',
//     nombre: 'Chispas',
//     mostrarVacunas: () => ['rabia', 'parvovirus']
//     }
//    };
   
//    // Éste método si existe
//    console.log(pacienteVeterinario.mascota.mostrarVacunas?.())
//    // Éste método NO existe
//    console.log(pacienteVeterinario.mascota.registrarVacunas?.())


// ------------------------------------

// Ejercicio 1
// Consigna: Crea un objeto persona con propiedades nombre, edad, y ciudad. Usa el operador de fusión nula para asignar un valor predeterminado a ciudad si es null o undefined.



// Ejercicio 2
// Consigna: Dado un objeto configuración, usa el operador lógico de asignación para asignar valores predeterminados a las propiedades tema e idioma si no están definidos.



// Ejercicio 3
// Consigna: Usa el operador de encadenamiento opcional para acceder a la propiedad direccion de un objeto usuario, y asigna un valor predeterminado en caso de que no exista.



// Ejercicio 4
// Consigna: Crea una función que reciba un objeto producto y use el operador de fusión nula y el operador de encadenamiento opcional para devolver el precio con impuestos, usando un valor predeterminado si precio es null o undefined. (No hacerlo con destructuracion)