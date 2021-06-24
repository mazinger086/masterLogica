/* 
Dado un array de numeros devolver el array con sus numeros elevados al cuadrado

Ejemplos:
alCuadrado([5,6,7]) // Devuelve: 25,36,49

*/

function alCuadrado(numeros){
    const numCuadrado = []
    for (const numero of numeros) {
        if(typeof numero === 'number'){
            numCuadrado.push(Math.pow(numero, 2))
        }
    }
   
    return numCuadrado;
}

console.log(alCuadrado([5,6,7, 'victor']))