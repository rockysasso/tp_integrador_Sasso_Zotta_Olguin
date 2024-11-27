let queryString = location.search; 
let searchParams = new URLSearchParams (queryString);
let rtoBusqueda = searchParams.get("buscador");

let terminoRtoBusqueda = document.querySelector("#search-term");
let resultadosCont = document.querySelector("#results-container");



if (rtoBusqueda) {
    terminoRtoBusqueda.textContent = `Resultados de búsqueda para: "${rtoBusqueda}"`;
  

 fetch (`https://dummyjson.com/recipes/search?q=${rtoBusqueda}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let recetas = data.recipes;
    let resultadosHtml = "";

    if (recetas.length > 0){
        for (let i = 0; i < recetas.length; i++){
            resultadosHtml += `
            <a href="./receta.html?id=${recetas[i].id}">
                    <article>
                        <img src="${recetas[i].image}" alt="${recetas[i].name}">
                        <p>${recetas[i].name}</p>
                        <p>${recetas[i].difficulty}</p>
                    </article>
            </a>
            `;
        }
    }   else{
        resultadosHtml = `<p>No se encontraron coincidencias para tu búsqueda.</p>`;
    }

    resultadosCont.innerHTML = resultadosHtml;
   })
    .catch(function(error){
        console.error("Error obteniendo los datos de la API: ", error)
        resultadosCont.innerHTML = `<p>Parece que ha ocurrido un error buscando la receta, por favor, vuelva a intentarlo mas tarde.</p>`;
    });
 }  else{
    terminoRtoBusqueda.textContent = "Por favor, ingrese un término de búsqueda.";
    resultadosCont.innerHTML = "";
}
