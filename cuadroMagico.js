function cuadradoMagico() {
    let tamanio = parseInt(prompt("Ingresa el tamanio de una fila nxn"));
    tamanio = tamanio * tamanio;
    let ar = new Array(tamanio);
    for (let index = 0; index < tamanio; index++) {
        ar[index] = parseInt(prompt("Ingresa un numero"));
    }
    function consecutivo(arreglo) {
        let arregloAux = arreglo.slice();
        arregloAux.sort(function (a, b) { return a - b })
        if (arregloAux[0] != 1) return console.log("No es consecutiva");;
        for (let index = 0; index < arregloAux.length - 1; index++) {
            if (arregloAux[index] + 1 != arregloAux[index + 1]) {
                return console.log("No es consecutiva");;
            }

        }
        return console.log("Si es consecutiva");;
    }
    function converirArreglo_Matriz(arreglo) {
        let tamanioArreglo = Math.sqrt(arreglo.length);
        let arregloAux = new Array(tamanioArreglo);
        for (let index = 0; index < tamanioArreglo; index++) {
            arregloAux[index] = new Array(tamanioArreglo);
        }
        let cont = 0;
        for (let i = 0; i < tamanioArreglo; i++) {
            for (let j = 0; j < tamanioArreglo; j++) {

                arregloAux[i][j] = arreglo[cont++]
            }
        }
        return arregloAux;
    }
    function esCuadradoMagico(arreglo) {
        let suma = 0;
        for (let i = 0; i < arreglo.length; i++) {
            suma += arreglo[0][i];
        }
        for (let i = 0; i < arreglo.length; i++) {
            let auxSuma = 0;
            for (let j = 0; j < arreglo.length; j++) {
                auxSuma += arreglo[i][j];
            }
            if (auxSuma != suma) {
                return console.log("NO es un cuadrado");
            }
        }

        for (let i = 0; i < arreglo.length; i++) {
            let auxSuma = 0;
            for (let j = 0; j < arreglo.length; j++) {
                auxSuma += arreglo[j][i];
            }

            if (auxSuma != suma) {
                return console.log("NO es un cuadrado");
            }
        }
        let auxSuma = 0;
        for (let i = 0; i < arreglo.length; i++) {
            auxSuma += arreglo[i][i];
        }
        if (auxSuma != suma) {
            return console.log("NO es un cuadrado");
        }
        return console.log("Es un cuadrado magico");
    }
    consecutivo(ar);
    esCuadradoMagico(converirArreglo_Matriz(ar));
}