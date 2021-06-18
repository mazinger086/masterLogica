/*
Dada una cadena de texto, darle la vuelta e invertir el orden de sus
caracteres, sin usar metodos propios del lenguaje, solo estructuras de control

Como hacerlo
- Funcion con parametro "texto"
- Crear una variable para guardar la cadena invertida
- Bucle que recorra el string y guarde los carateres de la variable

*/ 


function invertir(texto){
    let invertido = '';

    for (const letra of texto) {
        invertido = letra + invertido; //cambias el orden 
    }
    
    // for (let i = texto.length; i >= 0; i--) {
    //     invertido += texto[i];        
    // }

   return invertido;
   
}

console.log(invertir('Hola'));

