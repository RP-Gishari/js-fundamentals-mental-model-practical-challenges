
const { addRecipe, scaleRecipe, searchRecipes, recipeCollection, convertUnit } = require('./recipe-manager');

addRecipe(
    'ubugali',
    [
        {name: 'flour', amount: 3, unit: 'cups'},
        {name: 'water', amount: 1, unit: 'oz'}
    ],
    ['boil water at 100%', 'mix well wter and flour'],
    10
);
const scaledUbugali = scaleRecipe('ubugali', 6)
console.log(scaledUbugali);

const watRecipes = searchRecipes('water');
console.log(watRecipes.map(w => w.name));

console.log(convertUnit(2, 'cups'));


console.log(JSON.stringify(recipeCollection));




