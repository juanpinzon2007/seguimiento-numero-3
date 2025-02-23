let fisica = parseFloat(prompt("Ingrese la calificación de Física:"));
let quimica = parseFloat(prompt("Ingrese la calificación de Química:"));
let biologia = parseFloat(prompt("Ingrese la calificación de Biología:"));
let matematicas = parseFloat(prompt("Ingrese la calificación de Matemáticas:"));
let informatica = parseFloat(prompt("Ingrese la calificación de Informática:"));
let porcentaje = ((fisica + quimica + biologia + matematicas + informatica) / 50) * 100;
let calificacion;
if (porcentaje <= 59.9) {
    calificacion = "Mala";
} else if (porcentaje <= 80) {
    calificacion = "Buena";
} else {
    calificacion = "Excelente";
}
console.log(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
document.write(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
if (porcentaje <= 59.9) {
    document.write(" Rendimiento: Insuficiente.");
} else if (porcentaje <= 80) {
    document.write(" Rendimiento: Bueno.");
} else {
    document.write(" Rendimiento: Excelente.");
}
