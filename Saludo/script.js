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