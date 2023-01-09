
function creacionArreglosBidimensionales() {
    let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let arreglo = new Array(9);
    let cont = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arreglo[cont] = matriz[i][j];
            cont++;
        }
    }
    arreglo.push(0);
    arreglo.push(10);
    arreglo.push(11);
    arreglo.sort(function (a, b) { return a - b });
    console.log(arreglo);
    function ordenarMatriz(arreglo) {
        let matriz = new Array(3);
        for (let i = 0; i < matriz.length; i++) {
            matriz[i] = new Array(4);
        }
        cont = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matriz[i][j] = arreglo[cont];
                cont++;
            }
        }
        return matriz;
    }

    function elevarAlCuadradoMatriz(matriz) {
        let matrizCuadrada = new Array(3);
        for (let i = 0; i < 3; i++) {
            matrizCuadrada[i] = new Array(4);
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matrizCuadrada[i][j] = matriz[i][j] * matriz[i][j];

            }
        }
        return matrizCuadrada;
    }
    function cambiarOrden(matriz) {
        let matrizDiferenteOrden = new Array(4);
        for (let i = 0; i < 4; i++) {
            matrizDiferenteOrden[i] = new Array(3);
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matrizDiferenteOrden[j][i] = matriz[i][j];

            }
        }
        return matrizDiferenteOrden;
    }
    function eliminarElementos(matriz) {
        let matrizDiferenteOrden = new Array(3);
        for (let i = 0; i < 3; i++) {
            matrizDiferenteOrden[i] = new Array(3);
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                matrizDiferenteOrden[i][j] = matriz[i][j];
            }
        }
        return matrizDiferenteOrden;
    }
    function cambiarOrdenInverso(matriz) {
        let matrizDiferenteOrden = new Array(4);
        for (let i = 0; i < 4; i++) {
            matrizDiferenteOrden[i] = new Array(3);
        }
        let x = 0, y = 0;
        for (let i = matriz.length - 1; i >= 0; i--) {
            for (let j = matriz[i].length - 1; j >= 0; j--) {
                matrizDiferenteOrden[x][y] = (matriz[i][j]) + 0.5;
                if (y == 2) {
                    x++;
                    y = 0;
                }
                else y++;
            }

        }
        return matrizDiferenteOrden;
    }
    function matrizCentenasColumna(matriz) {
        let matrizDiferenteOrden = new Array(3);
        for (let i = 0; i < 3; i++) {
            matrizDiferenteOrden[i] = new Array(4);
        }
        let valorSumar = 100;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matrizDiferenteOrden[i][j] = matriz[i][j] + valorSumar;
                valorSumar += 100;
            } valorSumar = 100;
        }
        return matrizDiferenteOrden;

    }
    function matrizCentenasFila(matriz) {
        let matrizDiferenteOrden = new Array(3);
        for (let i = 0; i < 3; i++) {
            matrizDiferenteOrden[i] = new Array(4);
        }
        let valorSumar = 100;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matrizDiferenteOrden[i][j] = matriz[i][j] + valorSumar;

            } valorSumar += 100;
        }
        return matrizDiferenteOrden;

    }


    const matrizOrdenada = ordenarMatriz(arreglo);
    console.log(matrizOrdenada);


    let matrizCuadrado = elevarAlCuadradoMatriz(matrizOrdenada);
    console.log(matrizCuadrado);

    let matrizDiferenteOrden = cambiarOrden(matrizOrdenada);
    console.log(matrizDiferenteOrden);

    let matrizElementosBorrados = eliminarElementos(matrizOrdenada);
    console.log(matrizElementosBorrados);

    let matrizInversa = cambiarOrdenInverso(matrizOrdenada);
    console.log(matrizInversa);

    let matrizSumaColumna = matrizCentenasColumna(matrizOrdenada);
    console.log(matrizSumaColumna);
    
    let matrizSumaFila = matrizCentenasFila(matrizOrdenada);
    console.log(matrizSumaFila);
}