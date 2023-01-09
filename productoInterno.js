function productoInterno() {
    let producto = 0;
    let tamanio = prompt("Ingresa el tamanio de los dos arreglos");
    let arregloA = new Array(tamanio);
    let arregloB = new Array(tamanio);
    function llenarArreglo(tamanio, nombre) {
        let arreglo = new Array(tamanio);
        for (let i = 0; i < tamanio; i++) {
            arreglo[i] = prompt("Ingresa el tamanio del arreglo " + nombre)

        }
        return arreglo;
    }
    arregloA = llenarArreglo(tamanio, "A");
    arregloB = llenarArreglo(tamanio, "B");

    for (let index = 0; index < tamanio; index++) {

        producto += arregloA[index] * arregloB[index];
    }
    console.log("El producto es" + producto);
    if (producto == 0) {
        console.log("Son ortogonales");
    } else console.log("No son ortogonales");
}