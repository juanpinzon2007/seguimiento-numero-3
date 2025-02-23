let pitido = prompt("¿La computadora emite un pitido al iniciar? (si/no)");
let disco = prompt("¿El disco duro gira? (si/no)");


function diagnosticarComputadora(respuesta1, respuesta2) {
    let mensaje = "";

    if (respuesta1 === "si" && respuesta2 === "si") {
        mensaje = "Póngase en contacto con el técnico de apoyo";
    } else if (respuesta1 === "si" && respuesta2 === "no") {
        mensaje = "Verificar contactos de la unidad";
    } else if (respuesta1 === "no" && respuesta2 === "no") {
        mensaje = "Traiga la computadora para repararla en la central";
    } else if (respuesta1 === "no" && respuesta2 === "si") {
        mensaje = "Compruebe las conexiones de altavoces";
    } else {
        mensaje = "Respuestas inválidas. Ingrese 'Si' o 'No'.";
    }

    alert(mensaje);
}

diagnosticarComputadora(pitido, disco);

