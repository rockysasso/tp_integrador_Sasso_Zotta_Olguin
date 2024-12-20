let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');


let detalle = document.querySelector(".detalleReceta");

fetch('https://dummyjson.com/recipes?limit=100&skip=0')
.then(res => res.json())
.then(function(data){
   const receta = data.recipes[id - 1]
    
   let contenido = `
    <img src="${receta.image}" alt="${receta.name}">
    <h2> ${receta.cookTimeMinutes}' </h2>


    

    <h1> ${receta.name} </h1> 
    
    
    
    <p>${receta.instructions}</p>

    
    `
    let categoriasLinks = '';
    for (let i = 0; i < receta.tags.length; i++) {
        let tag = receta.tags[i];
        categoriasLinks += `<a href="category.html?tags=${tag}" target="_blank">${tag}</a>, `;
      
    }
    
    contenido += `<p> ${categoriasLinks}</p>`;
    
    ; detalle.innerHTML = contenido

})

.catch(function(err) {
    console.log("Error: " + err);
});

     