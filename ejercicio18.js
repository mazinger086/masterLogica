/*
Dado un numero mostrar todos sus numero divisores

Ejemplos:

mostrarDivisores(5) // devuelve 1 y 5

*/

function divisor(numero, posible_divisor){
    
    if(numero % posible_divisor === 0){
        return posible_divisor
    }

    return 0;
}

function mostrarDivisores(numero){
    for (let i = 1; i <= numero; i++) {
        let esDivisor = divisor(numero, i)  
        
        if(esDivisor){
            console.log(esDivisor);
        }
    }
}

mostrarDivisores(5);


