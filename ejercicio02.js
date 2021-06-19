/* Dada un cadena de texto, comporbar si es un palindromo o no.
Los palindromos son palabras que se leen igual aun estando invertidas 
por ejemplo: ana, bob, otto o simbolos raros*/

function palindromo(palabra){
    let invertido = palabra.split('').reverse().join('');    
    return 'Es un palindromo? ' + (invertido === palabra)     
}



console.log(palindromo('menem'));