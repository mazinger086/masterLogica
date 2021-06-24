/* 
Haz un reloj que en  tiempo real vaya mostrando la hora a cada segundo

Como hacerlo:
- Crear una clase
- Inicializar propiedades con hora actual
- Metodo con seInterval
- Metodo para mostrar la hora
- Metodo para sumar seundos a la hora
y actualizar horas minutos y segundos.


*/

// function miReloj(){
//     let time = new Date();
//     let hora = time.getHours();
//     let minutos = time.getMinutes();
//     let segundos = time.getSeconds();

//     if(segundos < 10){
//         segundos = '0' + time.getSeconds();
//     }

//    return `${hora}:${minutos}:${segundos}`
// }

// setInterval(function(){
//     console.log(miReloj());
// }, 1000)



class Reloj {

    constructor(){
        this.fecha = new Date();
        this.hora = this.fecha.getHours();
        this.minutos = this.fecha.getMinutes();
        this.segundos = this.fecha.getSeconds();
    }

    actualizar(segundos){
        this.segundos += segundos;

        // Actualizar segundos
        if(this.segundos >= 60){
            this.minutos++;
            this.segundos = 0;
        }

        // Actualizar minutos
        if(this.minutos >= 60){
            this.hora++;
            this.minutos = 0;
        }


        // Actualizar horas
        if(this.hora >= 24){
            this.hora = 0
        }
    }

    mostrar(){
        this.actualizar(1);
        console.log(`${this.hora}:${this.minutos < 10 ? '0' + this.minutos : this.minutos}:${this.segundos < 10 ? '0' + this.segundos : this.segundos}`);
    }

    encender(){
        setInterval(()=>{
            this.mostrar();
        }, 1000)
    }
}

let mi_reloj = new Reloj();
mi_reloj.encender();