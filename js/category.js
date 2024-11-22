let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString); 
let tag = queryStringObj.get('tags'); 


  let listaRecetas = document.querySelector(".contenedorCategorias");

  fetch(`https://dummyjson.com/recipes/tag/${tag}`)
    .then(res => res.json()) 
    .then(function(data) {
      if ( data.recipes.length > 0) {
        let recetas = ''; 

        for (let i = 0; i < data.recipes.length; i++) {
            recetas += `
            <a href="./receta.html?id=${data.recipes[i].id}">
            <article>
                    <img src="${data.recipes[i].image}" alt="${data.recipes[i].name}">
                    <p>${data.recipes[i].name}</p>
                    <p>${data.recipes[i].difficulty}</p>
                </article>
            
                </a>
            
            `;
          };

        listaRecetas.innerHTML = recetas;
      } else {
        listaRecetas.innerHTML = `<h1>No se encontraron recetas para la categoria "${tag}"</h1>`;
      }
    })

    .catch(function(err) {
      console.error("Error", err);
    });

