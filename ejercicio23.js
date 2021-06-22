/* 

Dada una cadena de texto, poner en mayuscula la primera letra
de cada palabra en la cadena y luego devolver la misma

*/


// function capitalized(texto){
//     let resultado = '';
    
//     for (const letra in texto) {
//         if(texto[letra - 1] === ' ' || parseInt(letra) === 0){
//             resultado += texto[letra].toUpperCase();
//         } else {
//             resultado += texto[letra]
//         }
//     }

//     return resultado;
    
    

// }

// console.log(capitalized('hola como estas'))


function capitalized(texto){
    let palabras = []

    for (let palabra of texto.split(' ')) {
        palabras.push(palabra[0].toUpperCase() + palabra.substring(1))        
    }

    palabras = palabras.join(' ');

    return palabras;
}

console.log(capitalized('hola como estas?'))