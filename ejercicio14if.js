const precios = {
    "pequeño": 6000,
    "grande": 12000,
    "tocineta": 3000,
    "jalapeño": 0,   
    "pavo": 3000,
    "queso": 2500
};

let tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");


if (tamaño !== "pequeño" && tamaño !== "grande") {
    alert("Tamaño no válido. Intente nuevamente.");
} else {
    
    let costoTotal = precios[tamaño];

    let ingredientes = ["tocineta", "jalapeño", "pavo", "queso"];

    for (let ingrediente of ingredientes) {
        let respuesta = prompt(`¿Desea agregar ${ingrediente}? (Si o No):`);
        if (respuesta === "si") {
            costoTotal += precios[ingrediente]; 
        }
    }

 
    alert(`Total a pagar: ${costoTotal}`);
}
