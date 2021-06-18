// Ejercicio 1 dado un numero devolver su tabla de multiplicar completa

function tablaMultiplicar(numero){
    let titulo = `# Tabla del ${numero} # \n`;
  
    for (let i = 1; i <= 10; i++) {
         titulo += ` ${numero} X ${i} = ${numero * i } \n`;           
    }

    return titulo;   
}

console.log(tablaMultiplicar(5))
