
let genero = prompt("Ingrese su género (femenino/masculino):");
let edad = parseInt(prompt("Ingrese su edad:"));


let ayuda = 0;


if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero === "masculino") {
    ayuda = 40000;
} else {
    console.log("Género no válido.");
}


if (ayuda !== 0) {
    console.log(`Usted recibe una ayuda económica de $${ayuda}.`);
    alert(`Usted recibe una ayuda económica de $${ayuda}.`);
} else {
    console.log("Usted no recibe ayuda económica.");
    alert("Usted no recibe ayuda económica.");
}
