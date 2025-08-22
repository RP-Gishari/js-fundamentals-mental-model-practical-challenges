
// 1. VARIABLES & SCOPE: Manage recipe data
const recipeCollection = [];
const measurementUnits = ['cups', 'tbsp', 'tsp', 'oz'];

 const conversionTable = {
    cups: 240,
    tbsp: 15,
    tsp: 64,
    oz: 45
 };

function addRecipe(name, ingredients, instructions, servings) {
  if(!name || !ingredients || !instructions || !servings){
     console.log("missing data")
     return;
    };
     
 const recipe1 = Object.freeze({
    name,
    ingredients: ingredients.map(ingr => Object.freeze(ingr)),
    instructions,
    servings,
  });

  recipeCollection.push(recipe1);
  return recipeCollection
};
 
function scaleRecipe(recipeName, newServings){
   const recipe2 = recipeCollection.find(rec => rec.name === recipeName);
   if(!recipe2){
        console.log("Recipe not found");
        return; 
   }
   if(newServings <= 0){
        console.log("Invalid number of servings");
        return;
   }
 
  const scaleFactor = newServings / recipe2.servings;
  
  const scaledIngredients = recipe2.ingredients.map(ingre => ({...ingre, amount: ingre.amount * scaleFactor}));
  return {
    ...recipe2, 
    ingredients : scaledIngredients,
    servings : newServings
  };

};

function searchRecipes(ingredient) {

   return recipeCollection.filter(recipe => 
    recipe.ingredients.some(ingr => ingr.name.toLowerCase().includes(ingredient.toLowerCase())
    )
   );
}

function convertUnit(amount, unit){
    return conversionTable[unit] ? amount * conversionTable[unit] : null;
}


const recipe = {
    name: 'Chocolate Chip Cookies',
    ingredients: [
        { name: 'flour', amount: 2, unit: 'cups' },
        { name: 'sugar', amount: 1, unit: 'cup' }
    ],
    instructions: ['Mix dry ingredients', 'Add wet ingredients'],
    servings: 24
};


module.exports = { addRecipe, scaleRecipe, searchRecipes, recipeCollection, convertUnit}
