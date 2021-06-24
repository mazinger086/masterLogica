/* 
Dado un array de enteros y un numero, detectar si esa lista 
de numeros es un permutacion del 1 al numero apartado

*/

function permutacion(secuencia,numero){
        
    for (let i = 0; i < numero; i++) {
        
        if(secuencia.indexOf(i + 1) < 0){
            return false;
        }        
    }

    return true;

    
}

console.log(permutacion([1,3,4,5], 5))

