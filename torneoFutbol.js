function torneoFutbol(){
        let equipos = ["Argentina","Holanda","Croacia","Brasil"
        ,"Marruecos","Portugal","Francia","Inglaterra"];
        function elecciones(equipos){
            if(equipos.length ==1 ) {
            return console.log("El ganador es "+ equipos[0]);
            }
            let cont =0;
            let equiposAux = new Array(equipos.length/2) ;
            let opcion;
            for (let index = 0; index < equipos.length-1; index=index+2) {
            console.log("a. "+equipos[index]+" - b,"+ equipos[index+1]);
            opcion = prompt("a. "+equipos[index]+" - b,"+ equipos[index+1]);
                console.log(opcion);
            if(opcion=='a'){
                equiposAux[cont] = equipos[index];
            } else equiposAux[cont] = equipos[index+1];
            cont++;
            }
            return elecciones(equiposAux);
        }
        elecciones(equipos);
}