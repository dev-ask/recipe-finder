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
 * function displayRecipe()
 * Displays the recipe name and its image
 * 
 * @param {*} data The response we got when user searched for a recipe
 */
 function displayRecipe(data){
    // Locating container for output
    const recipeGrid = document.querySelector(".box-5");
    const recipeCard = document.createElement("div");
    recipeCard.classList = "box-6";

    // Creating elements
    const recipeName = document.createElement("h2");
    const recipeImg = document.createElement("img");
    const viewBtn = document.createElement("a");
    var btnText = document.createTextNode("View Recipe");
    viewBtn.appendChild(btnText);
    
    // Feeding API response to elements
    recipeName.innerHTML = data.results[0].title; 
    recipeImg.src = data.results[0].image;
    
    // Pushing elements into one div
    recipeCard.appendChild(recipeName);
    recipeCard.appendChild(recipeImg);
    recipeCard.appendChild(viewBtn);
    recipeGrid.appendChild(recipeCard);
}

/**
 * This function gets source of a recipe then links it
 * 
 * @param {number} id This number is unique to each recipe
 */
// function getRecipeSource(id){
//     fetch("https://api.spoonacular.com/recipes/"+id+"/information?apiKey=abba883b13e44d23aa2c90c48434b19c")
//     .then(response=>{
//         return response.json();
//     })
//     .then(data=>{
//         console.log(data);
//         const recipeSource = data.sourceUrl;
//         const sourceLink = document.createElement("a");
//         var link = document.createTextNode("View Recipe");
//         sourceLink.appendChild(link);
//         sourceLink.href = recipeSource;
//         sourceLink.setAttribute('target', '_blank');
//         document.querySelector(".box-6").appendChild(sourceLink);
//     })
// }

