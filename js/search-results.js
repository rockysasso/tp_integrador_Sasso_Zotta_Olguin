let formulario = document.querySelector (".search-form");

let buscador = document.querySelector ("#buscador");
let errorMessage = document.querySelector ("#errorMessage");

let emptyErrorMessage = "El campo no puede estar vacio";
let errorFormLength = "La contraseña debe tener al menos 3 caracteres";

let erroresBool = false;

formulario.addEventListener ("submit", function(event){
    event.preventDefault();
    if (buscador.value == ""){
        errorMessage.style.display = "block";
        errorMessage.innerText = emptyErrorMessage;
        erroresBool = true
    } else {
    errorMessage.style.display = "none";
    }
    if (buscador.value.length < 3) {
        errorMessage.style.display = "block";
        errorMessage.innerText = errorFormLength;
        erroresBool = true
    } else{
    errorMessage.style.display = "none";

    } 
     if (erroresBool == false){
    this.submit();
    }
});