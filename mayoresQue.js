function mayoresQue() {
    let numeroLeer = prompt("Ingresa los numeros a leer");
    let arregloNumero = new Array(numeroLeer);
    let numeroComparar = 0;
    let contMayores = 0;
    for (let index = 0; index < numeroLeer; index++) {
        arregloNumero[index] = prompt("Ingresa un n");
    }
    numeroComparar = prompt("Ingresa el n a comparar");
    for (let index = 0; index < arregloNumero.length; index++) {
        if (arregloNumero[index] > numeroComparar) {
            contMayores++;
        }
    }
    console.log("Los n mayores son ", contMayores);



}