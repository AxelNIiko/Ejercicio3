function sudoku() {
    let test1 = [
        [4, 2, 6, 5, 7, 1, 3, 9, 8],
        [8, 5, 7, 2, 9, 3, 1, 4, 6],
        [1, 3, 9, 4, 6, 8, 2, 7, 5],
        [9, 7, 1, 3, 8, 5, 6, 2, 4],
        [5, 4, 3, 7, 2, 6, 8, 1, 9],
        [6, 8, 2, 1, 4, 9, 7, 5, 3],
        [7, 9, 4, 6, 3, 2, 5, 8, 1],
        [2, 6, 5, 8, 1, 4, 9, 3, 7],
        [3, 1, 8, 9, 5, 7, 4, 6, 2]];

    let test2 = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 5, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 4, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 8, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]];

    function comprobarSolucion(matriz) {
        let x = 0;
        for (let i = 0; i < 9;) {
            for (let j = 0; j < 8; j++) {
                while (j != 8) {
                    x = i;
                    for (let y = j + 1; y < 9; y++) {
                        if (matriz[i][j] == matriz[x][y]) {
                            return console.log("El arreglo leido no es la solucion correcta");
                        }
                        if (matriz[j][i] == matriz[y][x]) {
                            return console.log("El arreglo leido no es la solucion correcta");
                        }
                    } j++;
                }

                i++;

            }

        }

        let arregloAux = new Array();

        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                for (let x = i; x < 3; x++) {
                    for (let y = j; y < 3; y++) {
                        arregloAux.push(matriz[x][y]);

                    }

                }
                if (!consecutivo(arregloAux)) {
                    return console.log("El arreglo leido no es la solucion correcta");
                }

            }

        }


        return console.log("Es la solucion correcta");
    }
    function consecutivo(arreglo) {
        arreglo.sort(function (a, b) { return a - b })

        if (arreglo[0] != 1) return false;

        for (let index = 0; index < arreglo.length - 1; index++) {
            if (arreglo[index] + 1 != arreglo[index + 1]) {
                return false;
            }

        }

        return true;
    }

    comprobarSolucion(test1);
    comprobarSolucion(test2);
}
