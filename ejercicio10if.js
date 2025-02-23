let copias = parseInt(prompt("Ingrese la cantidad de copias que desea imprimir:"));

let precioPorCopia = 0;

if (copias >= 0 && copias <= 499) {
    precioPorCopia = 120;
} else if (copias >= 500 && copias <= 749) {
    precioPorCopia = 100;
} else if (copias >= 750 && copias <= 999) {
    precioPorCopia = 80;
} else if (copias >= 1000) {
    precioPorCopia = 50;
} else {
    console.log("Cantidad de copias no válida.");
    alert("Cantidad de copias no válida.");
}

if (precioPorCopia !== 0) {
    let precioTotal = copias * precioPorCopia;
    console.log(`Precio por copia: ${precioPorCopia}`);
    console.log(`Precio total: ${precioTotal}`);
    alert(`Precio por copia: ${precioPorCopia}\nPrecio total: ${precioTotal}`);
}
