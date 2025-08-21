
// 1. VARIABLES & SCOPE: Manage recipe data
let recipeCollection = [];
const measurementUnits = ['cups', 'tbsp', 'tsp', 'oz'];
// Challenge: Keep recipe data organized and accessible

// 2. FUNCTIONS: Recipe operations
function addRecipe(name, ingredients, instructions, servings) {

  let addedRecipes = {
    name: name,
    ingredients : ingredients,
    instructions : instructions,
    servings: servings
  }

  recipeCollection.push(addedRecipes);
        
  return recipeCollection;
}

console.log(JSON.stringify(addRecipe(
    "Ugali", [{name:'cassava', amount: 56, unit: 'tbsp'}, {name: 'wheat', amount: 43, unit: "oz"}], 
    ['boil water ata 100%', 'prepare to mix it well'], 43
), null, 2));
function scaleRecipe(recipeName, newServings) {}
function searchRecipes(ingredient) {}

// 3. OBJECTS: Recipe structure
const recipe = {
    name: 'Chocolate Chip Cookies',
    ingredients: [
        { name: 'flour', amount: 2, unit: 'cups' },
        { name: 'sugar', amount: 1, unit: 'cup' }
    ],
    instructions: ['Mix dry ingredients', 'Add wet ingredients'],
    servings: 24
};

