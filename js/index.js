listaRecetas = document.querySelector(".indexRecepieContainer");

fetch("https://dummyjson.com/recipes")
.then(function(reponse) {
    return reponse.json();
})
.then(function(data) {
    let recepies = "";

    for (let i = 0; i < 14; i++) {
        const receta = data.recipes[i];
        
        recepies += `
            <a href="./receta.html?id=${receta.id}">
                <article>
                    <img src="${receta.image}" alt="${receta.name}">
                    <p>${receta.name}</p>
                    <p>${receta.difficulty}</p>
                </article>
            </a>
        `;
    }

    listaRecetas.innerHTML = recepies;
})
.catch(function(err) {
    console.log("Error: " + err);
});

let verMas = document.querySelector(".botonCargarmas");
let i = 14; 

verMas.addEventListener('click', function() {
  let contador = i;

  fetch("https://dummyjson.com/recipes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
      let recetasExtra = "";

      for (let i = contador; i < contador + 10; i++) {
        if (data.recipes[i]) {
          const receta = data.recipes[i];
          
          recetasExtra += `
            <a href="./receta.html?id=${receta.id}">
                <article>
                    <img src="${receta.image}" alt="${receta.name}">
                    <p>${receta.name}</p>
                    <p>${receta.difficulty}</p>
                </article>
            </a>
          `;
        }
      }
      listaRecetas.innerHTML += recetasExtra;
      i += 10 
      
    })
    .catch(function(err) {
        console.log("Error: " + err);
    })})
