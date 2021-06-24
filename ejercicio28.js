/* 
Dado un numero, devolver su factorial.
El factorial de un numero es la multiplicacion
de todos los numeros hasta llegar a el

Factorial del 5:
1 x 2 x 3 x 4 x 5 = factorial

Ejemplos:
factorial(3) // Devuelve: 6

*/

function factorial(numero){
    let resultado = 1
    for (let i = 1; i <= numero; i++) {
        
        resultado *= i;
    }

    return resultado
}

console.log(factorial(3))