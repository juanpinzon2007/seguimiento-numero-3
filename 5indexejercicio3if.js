let Tipo = Number(prompt("Tipo de lavadoras 1. lavadora Grande, 2. lavadora Pequeña"))

let cantidad = Number(prompt("Cantidad de lavadoras"))

let Horas = Number(prompt("Horas de uso"))

if (Tipo == 1 && cantidad <= 2){
    let sumar = Horas * 4000 * cantidad
    document.write(`Costo por alquilar ${cantidad} lavadoras tipo ${Tipo} por ${Horas} horas es de ${sumar}`)
} else if (cantidad >= 3 && Tipo == 1){
    let sumar1 = Horas * 4000 * cantidad
    let Descuento = sumar1 * 0.83
    let TotalconDescuento = sumar1 - Descuento
    document.write(`Costo por alquilar ${cantidad} lavadoras tipo ${Tipo} por ${Horas} horas es de ${TotalconDescuento}`)
} else if (Tipo == 2 && cantidad <= 2){
    let sumar2 = Horas * 3000 * cantidad
    document.write(`Costo por alquilar ${cantidad} lavadoras tipo ${Tipo} por ${Horas} horas es de ${sumar2}`)
} else if (cantidad >= 3 && Tipo == 2){
    let sumar3 = Horas * 3000 * cantidad
    let Descuento1 = sumar3 * 0.83
    let TotalconDescuento1 = sumar3 - Descuento1
    document.write(`Costo por alquilar ${cantidad} lavadoras tipo ${Tipo} por ${Horas} horas es de ${TotalconDescuento1}`)
}