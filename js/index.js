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