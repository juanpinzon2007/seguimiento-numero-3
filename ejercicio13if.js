const tarifas = {
    "tigo": { cargoFijo: 45000, minutoInternacional: 200, paqueteDatos: 12000 },
    "claro": { cargoFijo: 30000, minutoInternacional: 100, paqueteDatos: 18000 },
    "movistar": { cargoFijo: 40000, minutoInternacional: 250, paqueteDatos: 8000 }
};

let operador = prompt("Ingrese su operador (Tigo, Claro o Movistar):").toLowerCase();


if (!tarifas[operador]) {
    alert("Operador no válido. Intente nuevamente.");
} else {
    let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
    let costoTotal = tarifas[operador].cargoFijo + (minutos * tarifas[operador].minutoInternacional);

    
    alert(`Operador: ${operador}
Cargo Fijo: $${tarifas[operador].cargoFijo}
Minutos Internacionales: ${minutos} x $${tarifas[operador].minutoInternacional}
Total a pagar: $${costoTotal}`);
}
