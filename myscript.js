/**
 * Getting response from API based on user input
 * 
 * @param {string} input This is the user input from the search box
 */
function getRecipe(input){
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=abba883b13e44d23aa2c90c48434b19c&query="+input+"&number=2")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        displayRecipe(data);
        console.log(data);
    })
}

/**
 * Displays the recipe name and its image
 * 
 * @param {*} data The response we got when user searched for a recipe
 */
function displayRecipe(data){
    // Locating container for output
    const recipeDiv = document.querySelector(".box-6");

    // Displaying recipe name
    const recipeName = data.results[0].title;
    const heading = document.createElement("h2");
    heading.innerHTML = recipeName;
    recipeDiv.appendChild(heading);

    // Displaying recipe image
    const recipeImg = document.createElement("img");
    recipeImg.src = data.results[0].image;
    recipeDiv.appendChild(recipeImg);

    getRecipeSource(data.results[0].id);
}

/**
 * This function gets source of a recipe then links it
 * 
 * @param {number} id This number is unique to each recipe
 */
function getRecipeSource(id){
    fetch("https://api.spoonacular.com/recipes/"+id+"/information?apiKey=abba883b13e44d23aa2c90c48434b19c")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        const recipeSource = data.sourceUrl;
        const sourceLink = document.createElement("a");
        var link = document.createTextNode("View Recipe");
        sourceLink.appendChild(link);
        sourceLink.href = recipeSource;
        sourceLink.setAttribute('target', '_blank');
        document.querySelector(".box-6").appendChild(sourceLink);
    })
}
