let container = document.getElementsByClassName("div1")[0];
let boton = document.getElementsByName("enviar")[0];
let divResultados = document.getElementById("resultados");
let desplegable = document.getElementsByName("desplegable")[0];
divResultados.style.color = "white";
desplegable.addEventListener("click", () => {
    let opcionDesplegable = desplegable.options[desplegable.selectedIndex].value;
    console.log(opcionDesplegable);
    if(opcionDesplegable == "Cylindre"){
        divResultados.innerHTML = `
        <p>Radio: </p>
        <input type="text" id="radio" name="radio" placeholder="1">
        <p>Altura: </p>
        <input type="text" id="altura" name="altura" placeholder="1">
        <p>Resultado: </p>
        <input readonly type="text" id="resultado" name="resultado" >
        `;
    } else if(opcionDesplegable == "Cube"){
        divResultados.innerHTML = `
        <p>Lado: </p>
        <input type="text" id="lado" name="lado" placeholder="1">
        <p>Resultado: </p>
        <input readonly type="text" id="resultado" name="resultado" >
        `;
    } else if(opcionDesplegable == "Cone"){
        divResultados.innerHTML = `
        <p>Radio: </p>
        <input type="text" id="radio" name="radio" placeholder="1">
        <p>Altura: </p>
        <input type="text" id="altura" name="altura" placeholder="1">
        <p>Resultado: </p>
        <input readonly type="text" id="resultado" name="resultado" >
        `;
    } else if (opcionDesplegable == "Sphere"){
        divResultados.innerHTML = `
        <p>Diametro: </p>
        <input type="text" id="diametro" name="diametro" placeholder="1">
        <p>Resultado: </p>
        <input readonly type="text" id="resultado" name="resultado" >
        `;
    } else if (opcionDesplegable == "Rectangular"){
        divResultados.innerHTML = `
        <p>Radio: </p>
        <input type="text" id="radio" name="radio" placeholder="1">
        <p>Altura: </p>
        <input type="text" id="altura" name="altura" placeholder="1">
        <p>Resultado: </p>
        <input readonly type="text" id="resultado" name="resultado" >
        `;
    }
});