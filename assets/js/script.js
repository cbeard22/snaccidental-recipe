// Is content for each category, going to be dynamically displayed or will it be a display on or off type of thing. 
// Ask about the 30 results per page or 30 total in class 
// Run a basic API fetch to see what data we get.

let selections = [];
// These are our section array, where checked items will be added to them.
/*
let meatArray = [];
let seafoodArray = [];
let meatSubArray = [];
let vegArray = [];
let grainsArray = [];
let fruitsArray = [];
let dairiesArray = [];
let spicesArray = [];
let oilsArray = [];
let nutsArray = [];
*/
let ingredientsArray = [];
let recipeArray = [];

//let dessertsArray = [];
//let saucesArray = [];

let cuisineArray = [];
let dietArray = [];
let allergensArray = [];
let ingredientsList1 = $("#returnCall");
let checkedBoxItem;

// Split into two teams of getting more of the HTML Fleshed out and umm getting a test API call to see what info we are receiving. 


// Function for generating search results. 
// Includes image, and includes Title of Recipe and both are a link to the recipe page. 
// At the bottom there should a a previous button and a next button

// Function that fetches the API and uses our object that has the "include array" and "restrict array". 
// That will be adding to the parameters of the fetch. 
// Will then start the function that generated the search results.
function searchOneInitial() {
    let apiOdy = "872fa65d52a2467f9914c55d89dbf2ba";
    // query = The (natural language) recipe search query
    // let query = "&query="
    // cuisine = The The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR').
    // excludeCuisine = The cuisine(s) the recipes must not match. One or more, comma separated (will be interpreted as 'AND').
    // diet = 	The diet for which the recipes must be suitable.
    // intolerances = A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered.
    // includeIngredients = A comma-separated list of ingredients that should/must be used in the recipes.
    // excludeIngredients = A comma-separated list of ingredients or ingredient types that the recipes must not contain. (boolean)
    // sort = The strategy to sort recipes by.
    // sortDirection = The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).
    // number = The number of expected results (between 1 and 100)
    requestURL = "https://api.spoonacular.com/recipes/complexSearch?includeIngredients=chicken,broccoli&number=10&apiKey=" + apiOdy;

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("Complex search data.")
            console.log(data)
            displayRecipes(data);
        })
}

//searchOneInitial();

// This function will run the api that grabs the recipe URL and then will display the image and title on the page.
function displayRecipes(data) {

}

// Section 1
// Event listeners to add checked items to the search array, and display them on the screen in the added ingredients section. 
//need to add css text transform for capitalization

$("#diet").on("click", ".diet", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    dietArray.push(checkedBoxItem);
    
});

$("#allergens").on("click", ".allergens", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    allergensArray.push(checkedBoxItem);
    
})

$("#cuisine").on("click", ".cuisine", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    cuisineArray.push(checkedBoxItem);
    
    
});

$("#meat").on("click", ".meat", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
    
   
    
});

$("#meatSubstitute").on("click", ".meatSubstitute", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
    
});

$("#seafood").on("click", ".seafood", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
    

    
});

$("#vegetables").on("click", ".vegetables", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
    
    
});

$("#grains").on("click", ".grains", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
    
});

$("#fruits").on("click", ".fruits", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
    
});

$("#dairies").on("click", ".dairies", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
});

$("#spices").on("click", ".spices", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
    
});

$("#oils").on("click", ".oils", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
    
});

$("#nuts").on("click", ".nuts", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    ingredientsArray.push(checkedBoxItem);
    
});

$("#desserts").on("click", ".desserts", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    recipeArray.push(checkedBoxItem);
    
});

$("#sauces").on("click", ".sauces", function (event) {
    event.preventDefault;
    checkedBoxItem = $(this).val();
    ingredientsList1.append(checkedBoxItem + ", ");
    recipeArray.push(checkedBoxItem);
    
    
});


// event listener for the search button.


// Section 2
// Function that takes the input and both adds the item to the search array and lists the item out in the visible page of what is being included in the search. 
// The items will need to be able to be closed/removed from the list. 
// Look up jQuery spell checker in include some stop for if they enter items wrong. 
// <script src="js/jquery.spellchecker.min.js"></script>
// <link href="css/jquery.spellchecker.css" rel="stylesheet" /> 
// https://github.com/badsyntax/jquery-spellchecker/wiki/Documentation
// Some sort of stop if they try to search with having no items 
// Discuss route for how we are going to add restrictions/ checkbox vs. search input. Should be added to separate array.

// Event listener for the two buttons that determine seach one or search two.


// Errors to keep an eye out for "fixing"

    // If search results pull up no recipes
        // Try again
        // Use less ingredients
        // Use different ingredients
        // Check your ingredients are actual ingredients
    // Require a minimum of three ingredients

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

