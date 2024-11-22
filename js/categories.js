let categorias = document.querySelector(".categorias");  
fetch('https://dummyjson.com/recipes/tags')  
  .then(res => res.json())  
  .then(function(data) {
    let categories = ''; 
    
    
    for (let i = 0; i < data.length; i++) {
      let tag = data[i];  
      categories += `<a href="categories.html?tags=${tag}" target="_blank">${tag}</a>, 
      <br>
      `;

    }

    
   

   
    categorias.innerHTML = categories;
  })
  .catch(function(err) {
    console.error("Error: ", err);
  });
