let angulo1 = parseInt(prompt("Ingrese el primer ángulo:"));
let angulo2 = parseInt(prompt("Ingrese el segundo ángulo:"));
let angulo3 = parseInt(prompt("Ingrese el tercer ángulo:"));

if ((angulo1 + angulo2 + angulo3) === 180) {
    console.log("Los ángulos ingresados forman un triángulo válido.");
    alert("Los ángulos ingresados forman un triángulo válido.");
} else {
    console.log("Los ángulos ingresados NO forman un triángulo válido.");
    alert("Los ángulos ingresados NO forman un triángulo válido.");
}
