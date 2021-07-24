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

    // Making space between
    const lineBreak = document.createElement("br");
    recipeDiv.appendChild(lineBreak);

    // Displaying recipe image
    const recipeImg = document.createElement("img");
    recipeImg.src = data.results[0].image;
    recipeImg.width = 200;
    recipeDiv.appendChild(recipeImg);
}
