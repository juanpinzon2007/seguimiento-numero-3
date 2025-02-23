let dias = parseInt(prompt("Ingrese la cantidad de días (15, 30 o 90):"));

let costo = 0;

if (dias === 15) {
    costo = 18000;
} else if (dias === 30) {
    costo = 35000;
} else if (dias === 90) { 
    costo = 86000;
} else {
    console.log("Número de días no válido.");
    alert("Número de días no válido. Ingrese 15, 30 o 90.");
}

if (costo !== 0) {
    console.log(`El costo de la mensualidad por ${dias} días es: ${costo}.`);
    alert(`El costo de la mensualidad por ${dias} días es: ${costo}.`);
}
