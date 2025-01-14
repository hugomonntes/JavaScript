// function mandarSaludo(){
//     let nombre = prompt("Introduce tu nombre");
//     window.alert("Hola " + nombre);
//     document.write(`Hola ${nombre}`);
// }


let boton = document.getElementById("boton");
boton.addEventListenner("onclick", cambiarColor());
function cambiarColor(){
    let body = document.getElementById("body");
    body.style.backgroundColor = "red";
}

let dni = "12345678Z";
let combinacionLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
let letra = dni[dni.length];
let numeros = [];
for (let i = 0; i < dni[7]; i++) {
    numeros.push(dni[i]);
}
console.log(numeros);
