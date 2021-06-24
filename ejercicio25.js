/* 
Dado un string, ponerlo por completo en mayusculas o minusculas
dependiendo de si hay mas mayusculas o minusculas por defecto en el string

Ejemplos:
mayusMinus('JOAQuin') //Devuelve: JOAQUIN
mayusMinus('Victor') //Devuelve: victor
*/


function mayusMinus(texto){
    let resultado = '';
    let mayusculas = [];
    let minusculas = [];

    for (const letras of texto.split('')) {
        if(letras.match(new RegExp(/[a-z]/))){
            minusculas.push(letras)
        }else if(letras.match(new RegExp(/[A-Z]/))){
            mayusculas.push(letras)
        }
    }

    if(mayusculas.length > minusculas.length){
        resultado = texto.toUpperCase();
    } else if(mayusculas.length < minusculas.length){
        resultado = texto.toLowerCase();
    } else {
        resultado = 'La cantidad de mayusculas es igual a la de minusculas'
    }

    return resultado
    
}

console.log(mayusMinus('DeCaEdRox'))