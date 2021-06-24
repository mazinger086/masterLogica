/* 
Dado un numero, mostrar su serie de fibonacci.
la serie de fibonacci es un orden de numeros donde
cada numero es la suma de los dos anteriores

Ejemplos:
fib(10)[0]
fib(10)[1]

Serie completa: 0,1,1,2,3,5,8,13,21,34,55

Como hacerlo:
- Crear una funcion con parametro numero
- Crear variable con dos primeros numeros de la serie
- Bucle desde dos al numero
- Sumar los dos anteriores valores a numero actual
- Devolver el resultado

*/

function fib(numero){
    let serie = [0,1]
    for (let i = 2; i <= numero; i++) {        
        serie.push(serie[i - 1] + serie[i - 2])        
    }
    return [serie, serie[numero]];
}

console.log('Serie completa:',fib(10)[0])

console.log('Resultado de la serie es:',fib(10)[1])