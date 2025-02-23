let Nombre = prompt("¿Cuál es su nombre?");
let Horas = Number(prompt("¿Cuántas horas trabajó?"));

let tarifa = Horas <= 10 ? 30000 : 33000;
let pago = Horas * tarifa;

document.write(`Hola ${Nombre}, su pago es de $${pago}`);
