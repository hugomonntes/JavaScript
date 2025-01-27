//Ejercicio 1
function mostrarNumero(){
    window.alert(Math.ceil(Math.random()*100));
}

//Ejercicio 2
function sumarNumeros(){
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let resultado = num1 + num2;
    window.alert(`La suma de ${num1} y ${num2} es ${resultado}.`);
}

//Ejercicio 3
function calcularAreaCirculo(){
    let radio = parseFloat(prompt("Introduce el radio del círculo en cm²:"));
    let area = Math.PI * Math.pow(radio, 2);
    window.alert(`El área del círculo es ${area.toFixed(2)} cm.`);
}

//Ejercicio 4
function isPar(){
    let number = parseInt(prompt("Introduce un número:"));
    if(number % 2 === 0){
        window.alert(`${number} es par.`);
    } else {
        window.alert(`${number} es impar.`);
    }
}

//Ejercicio 5
function generarNumeroAleatorio(){
    let numeroAleatorio = Math.ceil(Math.random*5);
    switch(numeroAleatorio){
        case 1:
            window.alert("El número es uno.");
            break;
        case 2:
            window.alert("El número es dos.");
            break;
        case 3:
            window.alert("El número es tres.");
            break;
        case 4:
            window.alert("El número es cuatro.");
            break;
        case 5:
            window.alert("El número es cinco.");
            break;
    }
}

//Ejercicio 6
function isMultiplo(){
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    if(num1 % num2 === 0){
        window.alert(`${num1} es múltiplo de ${num2}.`);
    } else {
        window.alert(`${num1} no es múltiplo de ${num2}.`);
    }
}

//Ejercicio 7
function precioEntrada(){
    let edad = parseInt(prompt("Introduce tu edad:"));
    if(edad >= 8){
        window.alert("Gratis");
    } else if (edad >= 9 && edad <= 16){
        window.alert("Precio: $5.00");
    } else if (edad >= 17 && edad <= 25){
        window.alert("Precio: $7.50");
    } else if (edad >= 26 && edad <= 55){
        window.alert("Precio: $10.00");
    } else if (edad >= 56 && edad <= 65){
        window.alert("Precio: $5.00");
    } else {
        window.alert("Precio: $0.00");
    }
}

//Ejercicio 8
function precioMascota(){
    let tipoMascota = prompt("Introduce el tipo de mascota (hurón, perro, gato, loro):");
    let precio;

    switch(tipoMascota.toLowerCase()){ //Pongo tolowercase() para hacer filtro si el user pone alguna letra en mayuscula
        case "hurón":
            precio = 1;
            break;
        case "perro":
            precio = 1.5;
            break;
        case "gato":
            precio = 1;
            break;
        case "loro":
            precio = 2;
            break;
        default:
            window.alert("Mascota no permitida.");
    }
    window.alert(`El precio de viajar con ${tipoMascota} es ${precio}€.`);
}

//Ejercicio 9
function premioBingo(){
    let edad = parseInt(prompt("Introduce tu edad:"));
    if(edad >= 75 && edad <= 80){
    window.alert(`Tu premio es ${0.05 * edad}€.`);
    } else {
        window.alert("No hay premio para esa edad.");
    }
}
//Ejercicio 10
function calcularFactorial(){
    let numero = parseInt(prompt("Introduce un número:"));
    let acumulador = 1;
    for(let i = 1; i <= numero; i++){
        acumulador *= i;
    }
    
    let contador = 1;
    do {
        acumulador *= contador;
        contador++;
    } while (contador <= numero);
    window.alert(`El factorial de ${numero} es ${acumulador}.`);
}

//Ejercicio 11
function sumarNumeros(){
    let maximoNumeros = parseInt(prompt("Introduce cuantos números vas a introducir:"));
    let acumulador = 0;
    for (let i = 0; i < maximoNumeros; i++) {
        let numeroUser = parseInt(prompt(`Introduce un número:`));
        acumulador += numeroUser;
    }
    window.alert(`La suma de todos los números introducidos es ${acumulador}.`);
}

//Ejercicio 12
function almacenarViajes(){
    let paisesVisitar = [];
    do {
        let pais = prompt("Introduce un país al que quieras visitar (o escribe 'fin' para terminar):");
        paisesVisitar.push(pais);
    } while (pais.toLowerCase() != 'fin');
    window.alert(`Has visitado ${paisesVisitar.length} países.`);
    window.alert(`Los países que has visitado son: ${paisesVisitar.join(', ')}`);
}

//Ejercicio 13 / 14
function listaNombres(){
    let listaNombres = [];
    let listaNombresMismaLetraInicial = [];
    do {
        let nombre = prompt("Introduce un nombre (o escribe 'fin' para terminar):");
        listaNombres.push(nombre.toLowerCase());
    } while(nombre.toLowerCase()!= 'fin');
    let letraInicio = prompt("Introduce una letra inicial por la que quieres la coincidencia:");
    for(let i = 0; i < nombres.length; i++){
        if(listaNombres.startsWith(letraInicio.toLowerCase())){
            listaNombresMismaLetraInicial.push(listaNombres[i]);
        }
    }
    window.alert(`Los nombres que comienzan con '${letraInicio.toLowerCase()}' son: ${listaNombresMismaLetraInicial.join(', ')}`);
}

//Ejercicio 15
function fibonacci(){
    let numero1 = 0;
    let numero2 = 1;
    let suma = 0;
    let limiteFinal = 10000;
    window.alert(`Fibonacci: ${numero1}, ${numero2}`);
    while(suma < limiteFinal){
        let siguienteNumero = numero1 + numero2;
        numero1 = numero2;
        numero2 = siguienteNumero;
        suma = numero1 + numero2;   
    }
}