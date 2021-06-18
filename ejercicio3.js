/*

Dada una palabra, buscarla en una frase y devolver cuantas veces 
aparecen la frase y la palabra deben ser parametros de una funcion

*/

// function buscarPalabra(palabra, frase){

//     let nuevaFrase = frase.split(' ');
//     let contador = 0;
    
//     nuevaFrase.forEach(word => {
//         if(word === palabra){
//              contador += 1; 
//         }        
//     });
     

//     return `La palabra ${palabra} se encontro ${(contador >= 1) ? contador + ' veces' : contador + ' vez'} en la frase`
// }

// let frase = 'Uno dos dos tres tres tres cuatro cuatro cuatro cuatro cinco'

// console.log(buscarPalabra('pedro', frase));


function coincidencias(frase, busqueda){
    let texto_limpio = frase.toLowerCase().replace(/[!¡¿?,.-]/gi, '') //REGEX /[simbolos]/ g = global i= indistinto
    let resultado = 0;

    if(texto_limpio.includes(busqueda)){

        let palabras = texto_limpio.split(' ');
        let mapa = {};

        for(let palabra of palabras){
            if(mapa[palabra]){               
                mapa[palabra]++
            } else{
                mapa[palabra] = 1;
            }
        }

        resultado = mapa[busqueda]
    }
    else {
        resultado = 0
    }

    return resultado
   



}

let frase = ""

console.log('Numero de coincidencias en la frase',coincidencias('!Hola que tal, soy Victor Lasauskas? no soy Victor Robles.', 'victor'));