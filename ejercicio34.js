/* 
Dado dos numeros, devolver los resultados de las
operaciones basicas entre ellos (suma, resta, multiplicacion, division)

Ejemplos:

calculadora(5,5)

// Devuelve:

la suma es: 10
la resta es: 0
la multiplicacion es: 25
la division es: 1

*/

function calculadora(x,y){
let resultado = `
La suma es: ${x + y} 
La resta es: ${x - y}
La multiplicacion es: ${x * y}
La division es: ${x / y}`;

    return resultado;
}


console.log(calculadora(5,5));