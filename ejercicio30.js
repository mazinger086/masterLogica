/* 
Dado un array de numeros elimina el duplicado, 
Si hay un string eliminarlo del array

Ejemplos:
eliminarDuplicados([1,2,1,3,2,4,5,6,4,8,7,6]) // Devuelve: [1,2,3,4,5,6,7,8]

*/

function eliminarDuplicados(arreglo){
    let resultado = [];

    resultado = arreglo.filter(el => {
        return typeof el === 'number'
    })

    resultado = new Set(resultado)
    return [...resultado]
}

console.log(eliminarDuplicados(['uno', 'dos', 1,2,3,1,4,5,3,]))