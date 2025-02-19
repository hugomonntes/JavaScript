//Piedra papel tijeras

function turnoUsuario(){
    let isChecked = true;
    let options = ["rock", "paper", "scissors"]
    let prompt; //Almacenar datos usuario
    do{
        if(prompt == options[0]){
            window.alert("Rock");
            isChecked = true;
        } else if (prompt == options[1]){
            window.alert("Paper");
            isChecked = true;
        } else if (prompt == options[2]){
            window.alert("Scissors");
            isChecked = true;
        } else {
            window.alert("false");
            isChecked = false;
        }
    } while(!isChecked);
}