// //Ejercicio 5
// /*
// Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con
// foreach e imprimir los elementos que sean números impares.
// */
// console.log("Ejercicio 5");
// let k = [17, 4, 64, 79, 109, 112];
// k.forEach(function impares(numero) {
//     if (numero % 2 != 0) {
//         console.log(numero);
//     }
// })

// /*
// Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo
// recorra, imprimiendo cada uno de sus elementos.
// */
// console.log("Ejercicio 8");


// let arregloNumero = [2, 5, 7, 9];

// function mostrarArreglo(arreglo) {
//     for (let i = 0; i < arreglo.length; i++) {
//         console.log(arreglo[i]);
//     }
// }

// mostrarArreglo(arregloNumero);

// Ejercicio
// const arreglo = [34, ["q"], 67, 1, 99, 1/2];
// arreglo.splice(3, 2);
// console.log(arreglo); 
// /*
// Cree una función que reciba un arreglo de nombres de personas y muestre si la letra
// “c” se encuentra entre tales nombres, en caso de que la letra “c” se encuentre,
// mostrar las veces que se encuentra(considerando las apariciones entre todos los
// nombres) . Se le debe pedir al usuario que introduzca el arreglo.
// */
// console.log("Ejercicio 13");

// // let arregloNombres = [];

// // let nombreAColocar;

// // do {

// //     nombreAColocar = prompt("Ingresa el nombre: ");

// //     if (nombreAColocar != "exit") {
// //         arregloNombres.push(nombreAColocar);
// //     }

// // } while (nombreAColocar != "exit");

// // function encontrarLetraC(arreglo) {
// //     let contador = 0;
// //     for (let i = 0; i < arreglo.length; i++) {
// //         for (let letra = 0; letra < arreglo[i].length; letra++) {
// //             if (arreglo[i][letra] == 'C' || arreglo[i][letra] == 'c') {
// //                 contador++;
// //             }
// //         }
// //     }
// //     return contador;
// // }

// // console.log(arregloNombres);
// // console.log(encontrarLetraC(arregloNombres));

// /*
// Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un
// condicional, y una variable contador(iniciela fuera del ciclo y úsela para almacenar las
// veces que aparece Maria en el arreglo) para mostrar cuántas veces aparece el
// nombre Maria.
// */
// console.log("Ejercicio 18");

// let arregloNombresDos = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];

// function contadorMarias(arreglo) {
//     let contador = 0;
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i] == "Maria") {
//             contador++;
//         }
//     }
//     return contador;
// }

// console.log(contadorMarias(arregloNombresDos));

// const cadenaConMasT = (cadenas)=>{
//     const repesTs = cadenas.map(cadena=> cadena.split(""))
//     .map(arreglosChars=> arreglosChars.filter(char=> char==="T"))
//     .map(arregloT=> arregloT.length)

//     const cantidadMax = Math.max(...repesTs)
//     const index = repesTs.findIndex((repesActual)=>cantidadMax === repesActual)
//     return cadenas[index]
// }

// console.log(cadenaConMasT(["ATATT","TTTTTTTT","ACAAAA"]))

// Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para
// mostrar la suma de sus elementos.

const arreglo = [15, 7, 9, 12, 1];

const sumarTodo =  arreglo => arreglo.reduce((valorActual,numeroActual)=>valorActual+=numeroActual)

console.log(sumarTodo(arreglo))