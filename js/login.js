let formulario = document.querySelector(".formularioAcceso");
let emailInput = document.querySelector("#correo");
let passwordInput = document.querySelector("#clave");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emailInput.value == "") {
        alert("Por favor complete el campo email.");
        return; 
    }

    if (passwordInput.value == ""){
        alert("Complete el campo contraseña por favor.");
        return;
    }
      formulario.submit();
});