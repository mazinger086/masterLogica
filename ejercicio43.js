/* 
Dadop un array de numeros, sacar el promedio de todos ellos

Ejemplos:

promedio([1,2,3]) // Devuelve; 2

*/

function promedio(numeros){
    let total = numeros.reduce((accum, num) => accum + num, 0 )
     return (total / numeros.length)
}


console.log(promedio([1,2,3]));
