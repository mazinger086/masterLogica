/*
Dado una cadena de texto, devolver cuantas vocales (a, e, i, o, u) tiene


*/

// function vocales(texto){
//     let vocales = ['a','e','i','o','u'];   
//     let contador = 0;
//     for (const letra of texto) {
//         if(vocales.includes(letra)) contador+=1        
//     }
//     return 'La palabra ' + texto + ' contiene ' + contador + ' vocales'
// }

// console.log(vocales('victorroblesweb.es'));

function vocales(texto){
    let coincidencias = texto.match(/[aeiou]/gi)
    return coincidencias ? coincidencias.length : 'la palabra no tiene vocales' ;
}

console.log(vocales('lasauskas'))