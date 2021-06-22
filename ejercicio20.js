/* 
Dadas dos cadenas de texto crear un algoritmo que compruebe
si son anagramas entre si

Una cadena es un anagrama de otra si usa los mismos caracteres
en la misma cantidad

No tener en cuenta espacios, simbolos raros, puntos, etc

Ejemplos:
anagramas('Riesgo', 'Sergio') // Devuelve true
anagramas('Victor', 'Robles') // Devuelve false

*/



function anagramas(cadena1, cadena2){ 
    let txt1 = textoLimpio(cadena1);
    let txt2 = textoLimpio(cadena2);

    if(txt1.length === txt2.length && txt1 === txt2){
       console.log('Son anagramas');
    }else {
       console.log('No son anagramas');
    }       
    
}


function textoLimpio(texto){
   return texto
        .replace(new RegExp(/[^\w]/gi), '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')   
}

anagramas('Sergio', 'Riesgo')