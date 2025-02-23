let letra= a;

letra=z ? console.log("es una vocal.."): console.log("es una consonante-.");

let numero = 7;

numero<0? console.log(`negativo`) : console.log(`positivo`)

let ocupacionmesa = true

let numerodemesa = 4

let mensaje = ocupacionmesa ?  ` la mesa llamada ${numerodemesa} esta ocupada"` : ` la mesa ${numeromesa} esta disponible"`; console.log(mensaje);


const usuario = "ficho123";
const contraseña = "34567";

usuario == "ficho123" && contraseña == "34567" ?
console.log(`señor con perfil ${usuario} bienvenido al sistema`) :
console.log(`señor con perfil ${usuario} es incorrecta la contraseña`) ;


let colorpintura = "rojo";
colorpintura == "verde" ? console.log(`el color de pintura  ${colorpintura} esta disponible`) :
colorpintura == "azul" ? console.log(`el color de pintura  ${colorpintura} esta disponible`) :
colorpintura == "cafe" ? console.log(`el color de pintura  ${colorpintura} esta disponible`) :
console.log(`muestra color de pintura ${colorpintura} no esta disponible el sistema se daño`) ;


let temperatura = 20;
if(temperatura>=33){
    console.log(`el clima esta calido porque supera ${temperatura} grados`)
}

let tipoplan = "basico";
if(tipoplan == "basico"){
    console.log(`va a tener el plan normal por adquirir el plan ${tipoplan}`);
}else if(tipoplan == "premium"){
    console.log("puede adquirir plan basico y premium");
}else{
    console.log("usted no es cliente de la empresa dirijase a atencion al cliente");

}


let perfiljuego = "ficho12";
let clavejuego = "1456*";
let perfilingresado = "ficho99";
let claveingresada = "5557";
let nombrepersonal = "jorge";

if(perfiljuego == perfilingresado && clavejuego == claveingresada){
    console.log(`${nombrepersonal} bienvenido!,seleccione opciones delsistema`);
}else{
    console.log(`acceso denegado..`)
}


let derecha = false;
let izquierda = false;
let arriba = true;
let abajo = false;

if(arriba){
    console.log("el muñeco del videojuego se esta moviendo hacia arriba");
} else if(izquierda){
    console.log("el muñeco del videojuego se esta moviendo hacia izquierda");
} else if(derecha){
    console.log("el muñeco del videojuego se esta moviendo hacia derecha");
} else if(abajo){
    console.log("el muñeco del videojuego se esta moviendo hacia abajo");
}else{
    console.log("movimiento extraño");
}


let encendido = true;
let potencia = 15;

if(encendido){
    console.log(`su play esta prendido`);
    if(potencia == 0){
        console.log(`el play se apago`);
}else if(potencia>0 && potencia<=40){
    console.log(`su play esta en reposo`);
}else{
    console.log("el play se esta recalentando");
}
}else{
    console.log(`encienda su play..`);

}


let dia = "viernes"
let clase = "tennis";
if(dia == "viernes"){
    console.log(`la clase de hoy es ${clase}`);
}

