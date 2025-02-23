const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

let modeloUsuario = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));


if (modelosDefectuosos.includes(modeloUsuario)) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no está defectuoso.");
}
