/* 
Dados dos numeros, indicar cual es mayor y cual es menor

Ejemplos:
mayorMenor(8,6)

*/

function mayorMenor(x, y){
    let resultado = ''
    if(x > y){
        resultado = `${x} es mayor a ${y}`
    } else if(x < y) {
        resultado = `${y} es mayor a ${x}`
    } else if( x === y) {
        resultado = `${x} y ${y} son iguales`
    } else {
        resultado = 'Introduce numeros correctos'
    }

    return resultado;
}

console.log(mayorMenor(true, 'hello'));