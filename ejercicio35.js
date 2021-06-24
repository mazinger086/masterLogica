/* 
Dado un array, crear otro con el primer y el  ultimo elemento del original

Ejemplos:

primeroYultimo([100,200,300,780]) // Devuelve: [100,780]


*/

function primeroYultimo(numeros){
    let elementos = [];
    
    let numeros2 = numeros.filter(num => typeof num === 'object')
    elementos.push(numeros2[0])
    elementos.push(numeros2[numeros2.length - 1])

    // console.log(numeros2);

    
    return elementos;

}

console.log(primeroYultimo(['hello', 125, true, 44,{name: 'charles', age: 25},08, undefined,{name: 'Javascript', frameworks: ['Vue', 'React', 'Angular']}, 36, false]))