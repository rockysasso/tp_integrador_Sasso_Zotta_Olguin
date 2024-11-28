let formulario = document.querySelector(".formularioAcceso");

let correoInput = document.querySelector("#correo");
let contraseñaInput = document.querySelector("#contraseña")

let errorCorreoMessage = document.querySelector(".correoError")
let errorContraseñaMessage = document.querySelector(".contraseñaError")

let emptyCorreoMessage = "Complete el campo correo electronico por favor";
let emptyContraseñaMessage = "Complete el campo contraseña por favor";

let erroresBool = false;

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    erroresBool = false;

    if (correoInput.value == ""){
        errorCorreoMessage.innerText = emptyCorreoMessage;
        errorCorreoMessage.style.display = "block";
        erroresBool = true;
    }else {
        errorCorreoMessage.innerText = "";
    }
    
    if (contraseñaInput.value == ""){
        errorContraseñaMessage.innerText = emptyContraseñaMessage;
        errorContraseñaMessage.style.display = "block";
        erroresBool = true
    }else {
        errorContraseñaMessage.innerText = "";
    };

    if (erroresBool == false){
        this.submit();
        }
});