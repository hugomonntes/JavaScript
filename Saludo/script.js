function mandarSaludo(){
    let nombre = prompt("Introduce tu nombre");
    window.alert("Hola " + nombre);
    document.write(`Hola ${nombre}`);
}


let boton = document.getElementById("boton");
boton.addEventListenner("onclick", cambiarColor());
function cambiarColor(){
    let body = document.getElementById("body");
    body.style.backgroundColor = "red";
}

let dni = "12345678Z"; //For que recorra el String hasta la posicion 7 que son los numero y estos los almacene en un varible numeros y que en la posiucion 8 que es la ultima la almacene en la varable de letras.
let numeros = [];
for (let i = 0; i < dni[7]; i++) {
    numeros.push(dni[i]);
}
console.log(numeros);
