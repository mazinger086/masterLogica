/*
Dados dos numeros, devolver cuantos numeros IMPARES hay entre ellos
Ejemplo:
impares(1,100) // DEVUELVE: 50

*/

function impares(n1, n2){
    let  contador = 0;
   
    while(n1 < n2){

        if(n1 % 2 !== 0){
           contador += 1
        }

        n1++;
    }

    return contador
}

console.log('Numeros impares: ',impares(1,100))