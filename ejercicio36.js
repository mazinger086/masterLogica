/* 
Dado un texto, devolver cuantas consonantes y cuantas vocales tiene

Ejemplos:

cuantaLetras('victorroblesweb.es') 
// Devuelve:
Consonates: 11 
Vocales: 6

*/

function cuantaLetras(texto){
    
    let consonantes = 0,
        vocales = 0,
        texto_limpio = '';    

    texto_limpio = texto.split('')
                        .filter(txt => /[áéíóú\w]/gi.test(txt) && isNaN(txt))
                        .join('')

    for (const letra of texto_limpio) {
        if(/[áéíóúaeiou]/gi.test(letra)){
            vocales+=1;
        }else{
            consonantes+=1;
        }
    }
    

    return [vocales, consonantes];
    
}

console.log(cuantaLetras('victorroblesweb.es'))