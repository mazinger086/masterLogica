/*
Dado dos arrays devolver array con solo los elementos comunes entre ambos

Ejemplos:
elementosComunes([4,5,6,7], [7,8,9,7,5])

*/


function elementosComunes(arr1, arr2){
    const filtrado = arr1.filter( el => arr2.includes(el) );

   return filtrado;
}

console.log(elementosComunes([4,5,6,7], [7,8,9,7,5]))
console.log(elementosComunes(['juan', 'jose', 'pedro', 'manuel', 'julian'], ['jose', 'manuel', 'Ivo', 'gabriel', 'hector']))