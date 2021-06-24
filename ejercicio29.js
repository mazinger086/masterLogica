/* 
Dado un numero, indicar si es un numero capicua o no
Los numeros capicua se leen de izquierda a derecha y viceversa

Ejemplos:

capi(2002) //Devuelve: true
capi(2014) // Devuelve: false

*/

function capi(numero){
    let resultado = ''
    let invertido = numero.toString()
                   .split('')
                   .reverse()
                   .join('')

    if(invertido != numero){
        resultado = false;
    }else{
        resultado = true
    }
    
    return resultado

}

console.log(capi(2052));