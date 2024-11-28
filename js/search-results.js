let formulario = document.querySelector (".search-form");

let buscador = document.querySelector ("#buscador");

let errorMessageEmpty = document.querySelector (".errorMessageEmpty");
let errorMessageLength = document.querySelector (".errorMessageLength");

let emptyErrorMessage = "El campo no puede estar vacio";
let errorFormLength = "Debe ingresar al menos 3 caracteres";

let erroresBool = false;



formulario.addEventListener ("submit", function(event){
    event.preventDefault();

    if (buscador.value == ""){        
        errorMessageEmpty.innerText = emptyErrorMessage;
        errorMessageEmpty.style.display = "block";
        erroresBool = true;
    } else {
    erroresBool = false;
    };
    if (buscador.value.length < 3) {        
        errorMessageLength.innerText = errorFormLength;
        errorMessageLength.style.display = "block";
        erroresBool = true;
    } else{
    erroresBool = false;
    };

    if (erroresBool == false){
    this.submit();
    }
});