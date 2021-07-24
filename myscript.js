function getRecipes(input){
    fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=abba883b13e44d23aa2c90c48434b19c&query="+input+"&number=2")
    .then(response=>{
        return response.json();
    }).then(data=>{
        displayRecipes(data);
    })
}
function displayRecipes(data){
    document.querySelector(".box-6").innerHTML="<h2>"+data.results[0].title+"</h2><br><img src="+data.results[0].image+" width='100%' />";
}