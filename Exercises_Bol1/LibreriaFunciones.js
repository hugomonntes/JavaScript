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