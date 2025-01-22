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
    let radio = parseFloat(prompt("Introduce el radio del círculo en cm:"));
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
    let premio = 0.05
    let edad = parseInt(prompt("Introduce tu edad:"));
}