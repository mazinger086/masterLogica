

function lado(numero){
    let lado = ""; 

    for (let i = 0; i < numero; i++) {
        lado += '*'        
    }

    return lado;
}

function cuadrado(numero){

    // linea superior horizontal
    let dibujo = lado(numero) + '\n'; 

    let contenido = ''; // creas contenido para no tocar dibujo que aplica a superior y inferior

    // Filas
    for (let x = 0; x < (numero - 2); x++) { // le restas dos por que ya tenes los astericos de la linea sup e inf
       contenido = '*' // Inicia el bucle con *

      // Contenido hueco
       for (let j = 0; j < (numero - 2); j++) {
           contenido += ' '           
       }

       contenido += '*'; // termina el bucle con *
       
       dibujo += contenido + '\n'; // salto de linea fila
    }

    // linea inferior
    dibujo += lado(numero); 

    return dibujo;
}


console.log(cuadrado(5));