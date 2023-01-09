function mayoresQueElPromedio() {
    let tamanio = prompt("Cuantos datos ingresaras?");
    let arreglo = new Array(tamanio);
    let promedio = 0;
    let total = 0;
    let contador = 0;
    for (let i = 0; i < tamanio; i++) {

        arreglo[i] = parseFloat(prompt("Dato " + (i + 1) + ": "));

        total += arreglo[i];
    }

    promedio = total / tamanio;

    for (let i = 0; i < tamanio; i++) {
        if (arreglo[i] > promedio) contador++;

    }

    console.log(contador + " datos son mayores que el promedio");
}