/*
Dado un numero, mostrar los numeros de 1 hasta el numero
pero para multiplos de 3 imprimir 'buzz' en lugar del numero
y para los multiplos de cinco imprimir 'lightyear'.
Para los multiplos de 3 y cinco imprimir "Buzzlightyear"

//Devuelve
1
2
buzz
4
lightyear

*/

function buzz(num){
    let resultado = '';
    
     if(num % 3 == 0 && num % 5 == 0){
           resultado = 'buzzlightyear';
    } 
    else if(num % 3 == 0){
            resultado = 'buzz';
    }
    else if(num % 5 == 0){
            resultado = 'lightyear';
    } else {
            return num;
    }    

    return resultado;
}

function imprimir(num){
    for (let i = 1; i <= num; i++) {
        console.log(buzz(i))   
    }
}

imprimir(15)