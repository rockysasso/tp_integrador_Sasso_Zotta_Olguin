let listaRecetas = document.querySelector(".indexRecepieContainer");
let contador = 10; 

fetch("https://dummyjson.com/recipes?limit=10")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let recetas = ""; 

        for (let i = 0; i < data.recipes.length; i++) {
            const receta = data.recipes[i];
            recetas += `
                <a href="./receta.html?id=${receta.id}">
                    <article>
                        <img src="${receta.image}" alt="${receta.name}">
                        <p>${receta.name}</p>
                        <p>${receta.difficulty}</p>
                    </article>
                </a>
            `;
        }

        listaRecetas.innerHTML = recetas;
    })
    .catch(function(err) {
        console.log("Error: " + err);
    });

let verMas = document.querySelector(".botonCargarmas");

verMas.addEventListener('click', function() {
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${contador}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            

            let recetasExtra = ""; 

            for (let i = 0; i < data.recipes.length; i++) {
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

            listaRecetas.innerHTML += recetasExtra;
            
            contador += 10;
        })
        .catch(function(err) {
            console.log("Error: " + err);
        });
});
