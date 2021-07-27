/**
 * Getting recipe ID in response from API based on user input
 * 
 * @param {string} input This is the user input from the search box
 */
function getRecipeNumber(input){
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=abba883b13e44d23aa2c90c48434b19c&query="+input+"&number=4")
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        getRecipeData(data);
    })
}

/**
 * Extracting recipe details using its ID
 * 
 * @param {*} recipeNumber JSON formatted data containing recipe ID for use
 */
function getRecipeData(recipeNumber){
    document.querySelector(".box-5").innerHTML = ""; // clear old results
    for(var keys in recipeNumber.results){
        fetch("https://api.spoonacular.com/recipes/"+recipeNumber.results[keys].id+"/information?apiKey=abba883b13e44d23aa2c90c48434b19c")
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            renderRecipe(data);
        })
    }
}

/**
 * Renders the API data on a recipe
 * 
 * @param {*} recipeData JSON formatted data containing detailed recipe info
 */
function renderRecipe(recipeData){
    
    // Locating output container
    recipeGrid = document.querySelector(".box-5");
    recipeCard = document.createElement("div");
    recipeCard.classList = "box-6";

    // Creating elements
    recipeName = document.createElement("h2");
    recipeImg = document.createElement("img");
    viewBtn = document.createElement("a");
    btnText = document.createTextNode("View Recipe");
    viewBtn.appendChild(btnText);
    
    // Feeding API data
    recipeName.innerHTML = recipeData.title;
    recipeImg.src = recipeData.image;
    viewBtn.href = recipeData.sourceUrl;
    viewBtn.setAttribute('target', '_blank');

    // Appending elements to the output container
    recipeCard.appendChild(recipeName);
    recipeCard.appendChild(recipeImg);
    recipeCard.appendChild(viewBtn);
    recipeGrid.appendChild(recipeCard);
}
