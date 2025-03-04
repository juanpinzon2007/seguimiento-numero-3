const generarFibonacci = (n) => {
    if (n <= 1 || !Number.isInteger(n)){
        return "por favor, ingrese un numero entero positivo."
    }
    let resultado ="";
    let a = 1, b = 0;
    for (let i = 0; i < n; i++){
        resultado += a + " ";
        a += b;
        b = a - b;
    }
    return resultado;
}
console.log(generarFibonacci(4));
console.log(generarFibonacci(3));
console.log(generarFibonacci(7));